/* Índice clicable del post. Solo actúa si la página trae el shell
   <aside class="post-toc"> (template del blog). Construye la lista
   con: primer link al H1 (id="post-top", lleva al top del banner),
   un link por cada H2 del .cuerpo (con id slugificado que asigna este
   script) y un link final "Conclusión" al footer (id="post-end"). El
   toggle abrir/cerrar lo lleva CSS con el checkbox hack del burger
   (mismo patrón que el nav del sitio). */
(() => {
    const toc = document.querySelector('.post-toc');
    if (!toc) return;
    const list = toc.querySelector('.post-toc-list');
    const h1 = document.querySelector('.post .banner h1');
    const h2s = document.querySelectorAll('.post .cuerpo h2');
    const end = document.getElementById('post-end');
    if (!list || (!h1 && h2s.length === 0)) {
        toc.style.display = 'none';
        return;
    }
    const slugify = (s) =>
        s.toLowerCase()
            .normalize('NFD')
            .replace(/[̀-ͯ]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    const addLink = (href, text) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = href;
        a.textContent = text;
        li.appendChild(a);
        list.appendChild(li);
    };
    if (h1) addLink(`#${h1.id || 'post-top'}`, h1.textContent.trim());
    const used = new Set();
    h2s.forEach((h2) => {
        const base = slugify(h2.textContent);
        let id = base;
        let n = 2;
        while (used.has(id)) id = `${base}-${n++}`;
        used.add(id);
        h2.id = id;
        addLink(`#${id}`, h2.textContent);
    });
    if (end) addLink(`#${end.id}`, 'Conclusión');
    /* El toggle abrir/cerrar lo maneja CSS con el checkbox hack
       (#post-toc-checkbox:checked). JS solo cierra el drawer al pulsar
       un link, para que en móvil el panel desaparezca tras navegar. */
    const checkbox = document.getElementById('post-toc-checkbox');
    list.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && checkbox) checkbox.checked = false;
    });
    /* El índice compite con el H1 del banner mientras se está leyendo arriba
       (en móvil el burger llega a taparlo). Lo ocultamos mientras el H1 está
       en viewport y lo mostramos cuando sale del todo por arriba, en las dos
       anchuras. Estado inicial hidden para evitar flash al cargar antes de
       que dispare el observer. Sin rootMargin negativo a propósito: recortar el root por
       arriba da el titular por "desaparecido" en cuanto su borde inferior
       queda sobre esa línea, y un h1 compacto pegado al top cabe entero en
       la franja excluida ya al cargar — el burger saldría sin scroll,
       tapando el titular que debía proteger. */
    if (h1 && 'IntersectionObserver' in window) {
        toc.classList.add('post-toc--hidden');
        const io = new IntersectionObserver(([entry]) => {
            toc.classList.toggle('post-toc--hidden', entry.isIntersecting);
            if (entry.isIntersecting && checkbox) checkbox.checked = false;
        });
        io.observe(h1);
    }
})();

/* /la-forja: el burger de secciones (fijo arriba-derecha) compite con el copy
   del hero. Mismo patrón que el post-toc de arriba: lo ocultamos
   (.forja-nav--hidden) mientras el hero está en viewport y lo mostramos al
   scrollear por debajo. JS cierra además el
   panel al pulsar un enlace (el checkbox-hack no se desmarca solo en anclas de
   la misma página). Estado inicial hidden para evitar flash antes de que
   dispare el observer. No-op fuera de /la-forja. */
(() => {
    const nav = document.querySelector('.forja-nav');
    if (!nav) return;
    const checkbox = document.getElementById('forja-nav-toggle');
    nav.querySelectorAll('.forja-nav-panel a').forEach((a) => {
        a.addEventListener('click', () => {
            if (checkbox) checkbox.checked = false;
        });
    });
    const hero = document.getElementById('inicio');
    if (hero && 'IntersectionObserver' in window) {
        nav.classList.add('forja-nav--hidden');
        /* Mismo umbral que .menu y .post-toc (sin rootMargin — ver el
           post-toc arriba): los tres menús fijos del sitio aparecen en el
           mismo punto de scroll. */
        const io = new IntersectionObserver(([entry]) => {
            nav.classList.toggle('forja-nav--hidden', entry.isIntersecting);
            if (entry.isIntersecting && checkbox) checkbox.checked = false;
        });
        io.observe(hero);
    }
})();

/* Menú principal (.menu): cierra el panel al pulsar un enlace y aplica el
   estándar de menús fijos del sitio — se oculta mientras el H1 de la página
   está en viewport y aparece cuando el titular sale del todo por arriba, para
   que el lector empiece por el titular sin nada que compita con él. Mismo
   IntersectionObserver que el índice del blog y el nav de secciones (sin
   rootMargin — ver el post-toc arriba). Estado inicial hidden para evitar
   flash antes de que dispare el observer; sin H1 o sin IntersectionObserver
   el menú queda visible (degrada). */
(() => {
    const menu = document.querySelector('.menu');
    if (!menu) return;
    const toggle = document.getElementById('menu-toggle');
    menu.querySelectorAll('.menu-link').forEach((link) => {
        link.addEventListener('click', () => {
            if (toggle) toggle.checked = false;
        });
    });
    /* menu--siempre-visible (prop siempreVisible de Menu.astro): la página
       pide el menú visible desde la carga — sin observer, queda en su estado
       por defecto (visible), igual que la degradación sin JS. */
    if (menu.classList.contains('menu--siempre-visible')) return;
    /* Umbral de aparición: el H1 (estándar de menús fijos — el menú vuelve en
       cuanto el titular sale por arriba, con poco scroll). */
    const umbral = document.querySelector('h1');
    if (umbral && 'IntersectionObserver' in window) {
        menu.classList.add('menu--hidden');
        const io = new IntersectionObserver(([entry]) => {
            menu.classList.toggle('menu--hidden', entry.isIntersecting);
            if (entry.isIntersecting && toggle) toggle.checked = false;
        });
        io.observe(umbral);
    }
})();

/* Barra fija con el CTA al calendario (.cta-sticky). Sigue el estándar de menús
   fijos del sitio —mismo IntersectionObserver, misma degradación a visible si el
   JS no corre— con un umbral propio: el CTA del hero en vez del H1, para que la
   barra entre justo cuando el botón original sale por arriba y se retire al
   volver. Con el H1 como umbral ambos coincidirían en pantalla un buen tramo. */
(() => {
    const barra = document.querySelector('.cta-sticky');
    if (!barra) return;
    /* El primer CTA en orden de documento que no cuelgue de la propia barra: el
       del hero. Filtrar por contains() en vez de por posición hace que la barra
       pueda vivir en cualquier punto del markup. */
    const umbral = [...document.querySelectorAll('.block--calendario')].find(
        (cta) => !barra.contains(cta),
    );
    if (umbral && 'IntersectionObserver' in window) {
        barra.classList.add('cta-sticky--hidden');
        const io = new IntersectionObserver(([entry]) => {
            /* "Fuera de viewport" no basta como condición: al cargar, un CTA
               que cae por debajo del fold ya está fuera y la barra saldría sin
               haber scrolleado. El signo de boundingClientRect.top separa los
               dos casos — negativo es que el botón quedó por arriba (lo has
               pasado), positivo que aún no has llegado a él. */
            const pasado =
                !entry.isIntersecting && entry.boundingClientRect.top < 0;
            barra.classList.toggle('cta-sticky--hidden', !pasado);
        });
        io.observe(umbral);
    }
})();

/* Account ID de MailerLite (público, sale en la URL del endpoint de subscribe). */
const ML_ACCOUNT_ID = '1628594';

/* Atribución de origen: captura UTMs y referrer al cargar y los persiste en
   sessionStorage para que el handler del optin los adjunte al subscribe.
   First-touch por sesión: si ya hay datos guardados no se pisan, así una
   navegación interna posterior no borra el origen real del aterrizaje.
   Los 4 campos se guardan crudos (sin derivar plataforma) — la lógica de
   agrupar "instagram-orgánico", "chatgpt", "google-seo", etc. vive en
   MailerLite vía segmentos sobre estos campos, no aquí. */
(() => {
    const ATTR_KEYS = ['utm_source', 'utm_medium', 'utm_content', 'referrer'];
    if (ATTR_KEYS.some(k => sessionStorage.getItem(k) !== null)) return;

    const params = new URLSearchParams(location.search);
    sessionStorage.setItem('utm_source',  params.get('utm_source')  || '');
    sessionStorage.setItem('utm_medium',  params.get('utm_medium')  || '');
    sessionStorage.setItem('utm_content', params.get('utm_content') || '');

    /* Referrer hostname, con `www.` normalizado y navegación interna
       descartada. Conservamos subdominios (l.instagram.com, lnkd.in, t.co)
       crudos para que en MailerLite se vea que vino por un shortener
       propio de la plataforma. */
    let referrer = '';
    if (document.referrer) {
        try {
            const host = new URL(document.referrer).hostname.replace(/^www\./, '');
            if (host !== 'davidvarea.com') referrer = host;
        } catch (_) { /* referrer malformado: lo dejamos vacío */ }
    }
    sessionStorage.setItem('referrer', referrer);
})();

/* Universal de MailerLite: tracking de pageviews + motor de popups.
   Cargado solo en páginas que importan scripts.js → landings comerciales,
   no en páginas de servicio (privacidad, 404, gracias, etc.). */
(function (w, d, e, u, f, l, n) {
    w[f] = w[f] || function () { (w[f].q = w[f].q || []).push(arguments); };
    l = d.createElement(e); l.async = 1; l.src = u;
    n = d.getElementsByTagName(e)[0]; n.parentNode.insertBefore(l, n);
})(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');
ml('account', ML_ACCOUNT_ID);

/* Suscripción a MailerLite desde forms con look propio.
   Marcado mínimo en el HTML:
     <form data-ml-form-id="XXXXXXXXXXXXXXXXX" data-ml-success="/ruta">
       <input type="email" name="email" required>
       <button type="submit">…</button>
     </form> */
document.querySelectorAll('form[data-ml-form-id]').forEach((form, posicionOptin) => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formId = form.dataset.mlFormId;
        const successUrl = form.dataset.mlSuccess || '/';
        const emailInput = form.querySelector('input[type="email"]');
        if (!emailInput || !emailInput.value || !emailInput.checkValidity()) {
            emailInput?.focus();
            return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        /* Si el botón tiene .title (estructura típica de .block en este sitio),
           cambiamos solo ese span para conservar el icono. Si no, fallback
           al texto del botón entero. */
        const labelEl = submitBtn?.querySelector('.title') || submitBtn;
        if (submitBtn) submitBtn.disabled = true;
        if (labelEl) labelEl.textContent = 'Enviando…';

        const body = new FormData();
        body.append('fields[email]', emailInput.value);
        body.append('ml-submit', '1');
        body.append('anticsrf', 'true');

        /* ultimo_optin: campo custom en MailerLite. Se deriva del pathname
           para que el mismo form-id en cualquier página etiquete su origen
           sin marcar cada HTML. /monetizar → monetizar, / → home (los slashes
           internos pasan a guiones). Sobreescribe en cada suscripción; el
           "primer optin" se copia desde MailerLite a otro campo vía automation. */
        const origen = location.pathname
            .replace(/\.html$/, '')
            .replace(/^\/+|\/+$/g, '')
            .replace(/\//g, '-') || 'home';
        body.append('fields[ultimo_optin]', origen);

        /* posicion_optin: índice del form dentro de la página (0 = primero,
           que en las landings es el del banner). Sale del orden de documento
           del querySelectorAll, no de sessionStorage: es propio de cada form,
           no del aterrizaje, así que no es first-touch. Combinado con
           ultimo_optin dice en qué optin de la landing convirtió.
           data-ml-posicion (prop `posicion` de OptinBase) lo sobreescribe
           para optins fuera del flujo de la página — el popup exit-intent
           manda 99 — cuyo ordinal variaría por página sin identificar nada. */
        body.append('fields[posicion_optin]', form.dataset.mlPosicion ?? posicionOptin);

        /* Atribución de origen capturada al cargar la página (bloque arriba).
           Vacíos se envían como "" — MailerLite los acepta y mantiene la
           columna consistente para segmentar después. */
        body.append('fields[utm_source]',  sessionStorage.getItem('utm_source')  || '');
        body.append('fields[utm_medium]',  sessionStorage.getItem('utm_medium')  || '');
        body.append('fields[utm_content]', sessionStorage.getItem('utm_content') || '');
        body.append('fields[referrer]',    sessionStorage.getItem('referrer')    || '');

        try {
            /* mode: 'no-cors' → el POST llega a MailerLite, pero no podemos
               leer la respuesta. Para este flujo basta: si el envío sale,
               redirigimos al success URL pase lo que pase. */
            await fetch(
                `https://assets.mailerlite.com/jsonp/${ML_ACCOUNT_ID}/forms/${formId}/subscribe`,
                { method: 'POST', mode: 'no-cors', body }
            );
        } catch (_) {
            /* Errores de red caen aquí. Redirigimos igual: si el email no
               llegó, el visitante volverá a probar al no recibir el lead
               magnet. Mostrar error rompería más de lo que arregla. */
        }

        /* Marca "ya envió un optin" para que el popup exit-intent no vuelva
           a perseguir a un suscriptor en este navegador. Best effort: en
           otro dispositivo la marca no existe y el popup saldrá igual. */
        localStorage.setItem('optin-enviado', '1');

        window.location.href = successUrl;
    });
});

/* Banner de cookies — aviso informativo único, dismissed via localStorage.
   Solo aparece en páginas que cargan scripts.js (landings comerciales +
   posts del blog); transaccionales nunca lo ven.*/
(() => {
    if (localStorage.getItem('cookie-banner-dismissed') === '1') return;
    const banner = document.createElement('aside');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Aviso de cookies');
    banner.innerHTML = `
        <p class="cookie-banner__text">Texto muermazo para avisarte de que la web usa <strong>cookies</strong> para funcionar. <a class="cookie-banner__link" href="/privacidad" target="_blank" rel="noopener">Más info.</a></p>
        <div class="cookie-banner__botones">
            <button type="button" class="cookie-banner__accept">Aceptar todas</button>
            <button type="button" class="cookie-banner__accept cookie-banner__accept--blanco">Solo las necesarias</button>
        </div>
    `;
    // Reserva bajo el body la altura real del banner: sin esto, al llegar
    // al final de páginas donde el último elemento es el footer (nav o
    // disclaimer legal), el banner fixed lo tapa por completo hasta que se
    // descarta — no hay más scroll posible para dejarlo ver.
    const ajustarHueco = () => {
        document.body.style.paddingBottom = banner.offsetHeight + 'px';
    };
    const dismiss = () => {
        localStorage.setItem('cookie-banner-dismissed', '1');
        window.removeEventListener('resize', ajustarHueco);
        document.body.style.paddingBottom = '';
        banner.remove();
    };
    banner.querySelectorAll('.cookie-banner__accept').forEach((boton) => boton.addEventListener('click', dismiss));
    document.body.appendChild(banner);
    ajustarHueco();
    window.addEventListener('resize', ajustarHueco);
})();

/* Popup exit-intent (La Forja). El HTML viaja oculto en las páginas que lo
   montan (ExitPopupForja vía BaseLayout/PostLayout); aquí solo se decide
   cuándo revelarlo, con triggers distintos por dispositivo. ESCRITORIO: el
   ratón abandona el documento por el borde superior, donde viven la X de
   la pestaña y la barra de URL. MÓVIL: no hay señal de cierre detectable,
   así que se aproxima con dos momentos de atención rota — el retorno tras
   ≥10s en otra app (visibilitychange no puede avisar de la salida: con la
   página oculta no se pinta nada, así que recibe al que vuelve desubicado)
   y 45s de inactividad (el lector activo ya tiene optins repartidos por el
   texto; el quieto probablemente dejó de mirar el móvil). Frenos comunes:
   visto una vez → 24h de silencio en todo el navegador (localStorage con
   timestamp; por pestaña no vale porque los enlaces del menú abren pestaña
   nueva y perseguiría al visitante en cada una), nunca para quien ya envió
   un optin en este navegador (localStorage 'optin-enviado', lo marca el
   handler de submit de arriba), y armado con retardo para no disparar
   sobre la entrada recién cargada la página. */
(() => {
    const popup = document.getElementById('exit-popup');
    if (!popup) return;
    if (localStorage.getItem('optin-enviado') === '1') return;

    const PAUSA_MS = 24 * 60 * 60 * 1000;
    const enPausa = () =>
        Date.now() - Number(localStorage.getItem('exit-popup-visto') || 0) < PAUSA_MS;
    if (enPausa()) return;

    /* El puntero primario decide el juego de triggers y reescribe el código
       de atribución del form: 99 (baked en el HTML) = popup de escritorio,
       98 = popup móvil — así MailerLite separa qué variante convierte. */
    const esTactil = matchMedia('(pointer: coarse)').matches;
    if (esTactil) {
        popup.querySelector('form[data-ml-form-id]')?.setAttribute('data-ml-posicion', '98');
    }

    const cerrar = () => {
        popup.hidden = true;
        document.body.style.overflow = '';
    };
    const desarmar = () => {
        document.removeEventListener('mouseout', onExit);
        document.removeEventListener('visibilitychange', onRetorno);
        ACTIVIDAD.forEach((ev) => document.removeEventListener(ev, reiniciarInactividad));
        clearTimeout(inactividadTimer);
    };
    const mostrar = () => {
        desarmar();
        /* Re-chequeo al disparar: otra pestaña abierta a la vez puede
           haberlo mostrado después de que esta página cargara y pasara el
           filtro de arriba. */
        if (enPausa()) return;
        localStorage.setItem('exit-popup-visto', String(Date.now()));
        popup.hidden = false;
        /* Scroll de la página bloqueado mientras el overlay está abierto;
           la carta scrollea por su cuenta si no cabe (max-height en CSS).
           El autofocus del email solo con ratón: en táctil levantaría el
           teclado en pantalla tapando media carta. */
        document.body.style.overflow = 'hidden';
        if (!esTactil) {
            popup.querySelector('input[type="email"]')?.focus({ preventScroll: true });
        }
    };

    /* mouseout sin relatedTarget = el puntero salió del documento (no un
       cambio entre elementos). El umbral de clientY lo acota al borde
       superior con margen: el último sample del puntero antes de salir
       queda dentro del viewport, y con movimiento rápido puede caer varias
       decenas de px por debajo del borde — un 0 estricto casi nunca se
       cumple (las libs clásicas de exit-intent usan 20-50px por esto). */
    const onExit = (e) => {
        if (!e.relatedTarget && e.clientY < 50) mostrar();
    };

    /* Retorno (móvil): dispara al volver a la página tras ≥10s oculta.
       Menos de eso es un vistazo a una notificación o un salto de app de
       segundos, no una ausencia que desubique. */
    let ocultadoEn = 0;
    const onRetorno = () => {
        if (document.visibilityState === 'hidden') {
            ocultadoEn = Date.now();
        } else if (ocultadoEn && Date.now() - ocultadoEn >= 10 * 1000) {
            mostrar();
        }
    };

    /* Inactividad (móvil): 45s sin scroll ni toque. keydown incluido para
       no saltar mientras teclean el email en un optin inline. Si el plazo
       vence con la página oculta, el popup queda abierto esperando: al
       volver lo encuentran en pantalla, que es justo el caso de uso. */
    const ACTIVIDAD = ['scroll', 'touchstart', 'keydown'];
    let inactividadTimer;
    const reiniciarInactividad = () => {
        clearTimeout(inactividadTimer);
        inactividadTimer = setTimeout(mostrar, 45 * 1000);
    };

    setTimeout(() => {
        if (esTactil) {
            document.addEventListener('visibilitychange', onRetorno);
            ACTIVIDAD.forEach((ev) =>
                document.addEventListener(ev, reiniciarInactividad, { passive: true }));
            reiniciarInactividad();
        } else {
            document.addEventListener('mouseout', onExit);
        }
    }, 4000);

    /* Cierre solo deliberado: la X o Escape. Click en el velo NO cierra —
       el popup es la última bala antes de perder al visitante y un click
       accidental fuera de la carta no debe descartarla. Escape se mantiene:
       es una acción consciente y la salida estándar de un dialog para
       teclado. */
    popup.querySelector('.exit-popup-close').addEventListener('click', cerrar);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !popup.hidden) cerrar();
    });
})();

/* Title parpadeante estilo notificación: reclama al visitante que se ha ido a
   otra pestaña o a otro programa. Se activa con la clase `title-alerta` en el
   <body> — lo pide la landing, no el sitio entero, así que una página sin la
   clase carga este bloque y sale.
   Cubre los dos casos de "irse": cambiar de pestaña o minimizar
   (visibilitychange) y mover el foco a otro programa con la pestaña aún activa
   (blur de window) — este último no levanta document.hidden, de ahí los dos
   disparadores y el document.hasFocus().
   La llamada inicial a sincronizar() es lo que cubre la pestaña que nace en
   segundo plano (ctrl+clic, o el target=_blank de las cards de la home con el
   visitante quedándose donde estaba): sin ella el reclamo espera un evento que
   no llega hasta que el visitante vuelve, que es justo cuando ya sobra. */
(function () {
    if (!document.body.classList.contains('title-alerta')) return;

    const original = document.title;
    const alerta = '(1) ' + original;
    let timer = null;
    let mostrandoAlerta = false;

    function pintar(conAlerta) {
        document.title = conAlerta ? alerta : original;
        mostrandoAlerta = conAlerta;
    }

    function arrancar() {
        if (timer) return;
        /* El primer parpadeo va inmediato: esperar al primer tick regala un
           segundo de título quieto justo cuando el visitante mira la barra de
           pestañas para elegir a dónde va. */
        pintar(true);
        timer = setInterval(() => pintar(!mostrandoAlerta), 1000);
    }

    function parar() {
        clearInterval(timer);
        timer = null;
        pintar(false);
    }

    function sincronizar() {
        if (document.hidden || !document.hasFocus()) arrancar();
        else parar();
    }

    document.addEventListener('visibilitychange', sincronizar);
    window.addEventListener('blur', sincronizar);
    window.addEventListener('focus', sincronizar);
    sincronizar();
})();
