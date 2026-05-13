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
document.querySelectorAll('form[data-ml-form-id]').forEach(form => {
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
