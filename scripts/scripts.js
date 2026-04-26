/* Cerrar el menú burger al pulsar cualquiera de sus enlaces */
document.querySelectorAll('.menu .menu-link').forEach(link => {
    link.addEventListener('click', () => {
        const toggle = document.getElementById('menu-toggle');
        if (toggle) toggle.checked = false;
    });
});
