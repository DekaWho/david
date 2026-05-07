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
