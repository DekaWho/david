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
    /* En móvil el burger tapaba el H1 del banner. Lo ocultamos mientras
       el H1 está en viewport y lo mostramos al scrollear más abajo. La
       clase `post-toc--hidden` está scopeada en CSS al @media móvil, así
       que el lateral de desktop no se ve afectado. Estado inicial hidden
       para evitar flash al cargar antes de que dispare el observer.
       rootMargin top negativo: el observer considera al h1 "fuera de
       vista" cuando su borde inferior está a 35% del viewport del top —
       el burger aparece antes de que el h1 desaparezca por completo. */
    if (h1 && 'IntersectionObserver' in window) {
        toc.classList.add('post-toc--hidden');
        const io = new IntersectionObserver(
            ([entry]) => {
                toc.classList.toggle('post-toc--hidden', entry.isIntersecting);
                if (entry.isIntersecting && checkbox) checkbox.checked = false;
            },
            { rootMargin: '-35% 0px 0px 0px' }
        );
        io.observe(h1);
    }
})();

/* Cerrar el menú burger al pulsar cualquiera de sus enlaces */
document.querySelectorAll('.menu .menu-link').forEach(link => {
    link.addEventListener('click', () => {
        const toggle = document.getElementById('menu-toggle');
        if (toggle) toggle.checked = false;
    });
});

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
           sin marcar cada HTML. /blog/viralidad → blog-viralidad,
           /robame → robame. Sobreescribe en cada suscripción; el "primer optin"
           se copia desde MailerLite a otro campo vía automation. */
        const origen = location.pathname
            .replace(/\.html$/, '')
            .replace(/^\/+|\/+$/g, '')
            .replace(/\//g, '-') || 'home';
        body.append('fields[ultimo_optin]', origen);

        /* posicion_optin: índice del form dentro de la página (0 = primero,
           que en las landings es el del banner). Sale del orden de documento
           del querySelectorAll, no de sessionStorage: es propio de cada form,
           no del aterrizaje, así que no es first-touch. Combinado con
           ultimo_optin dice en qué optin de la landing convirtió. */
        body.append('fields[posicion_optin]', posicionOptin);

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

        window.location.href = successUrl;
    });
});

/* Banner de cookies — aviso informativo único, dismissed via localStorage.
   Solo aparece en páginas que cargan scripts.js (landings comerciales +
   posts del blog); transaccionales nunca lo ven. Aceptar y X hacen lo
   mismo: persisten el dismiss y retiran el elemento. */
(() => {
    if (localStorage.getItem('cookie-banner-dismissed') === '1') return;
    const banner = document.createElement('aside');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Aviso de cookies');
    banner.innerHTML = `
        <button type="button" class="cookie-banner__close" aria-label="Cerrar aviso">&times;</button>
        <p class="cookie-banner__text">Texto muermazo para avisarte de que la web usa <strong>cookies</strong> para funcionar. <a class="cookie-banner__link" href="/privacidad" target="_blank" rel="noopener">Más info.</a></p>
        <button type="button" class="cookie-banner__accept">Aceptar</button>
    `;
    const dismiss = () => {
        localStorage.setItem('cookie-banner-dismissed', '1');
        banner.remove();
    };
    banner.querySelector('.cookie-banner__accept').addEventListener('click', dismiss);
    banner.querySelector('.cookie-banner__close').addEventListener('click', dismiss);
    document.body.appendChild(banner);
})();
