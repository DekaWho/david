/* ------ Menú móvil ------ */

// cerrar el menú burger al pulsar en un enlace
document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu-toggle').checked = false;
  });
});


/* ------ Marcar link activo según el hash ------ */

function actualizarActiveLink(){
  const links = document.querySelectorAll('.menu .links a');
  const currentHash = window.location.hash;

  links.forEach(link => link.classList.remove('active'));
  links.forEach(link => {
    if (link.getAttribute('href') === currentHash) {
      link.classList.add('active');
    }
  });
}

actualizarActiveLink();
window.addEventListener('hashchange', actualizarActiveLink);
