   
// FORM SCRIPT

//incrustar form de mailerlite
function insertForm(targetId) {
  const template = document.getElementById('lite-form').content;
  document.getElementById(targetId).appendChild(template.cloneNode(true));
  console.log(targetId + "creado");
}

// Hay que ejecutarlo desde el archivo que se quiera insertar:
//insertForm('formPC');
//insertForm('formMobile');


// scroll del CTA de la hero section (con iluminacion del menú)
// ya no hay scroll porque hay varios forms
/*function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

  section.scrollIntoView({ behavior: 'smooth' });
  history.pushState(null, null, `#${id}`);
  actualizarActiveLink();
}*/


// MENÚ SCRIPT

// Cerrar el menu burger al pulsar en un enlace
    document.querySelectorAll('.links a').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('menu-toggle').checked = false;
      });
    });

// Marcar menú activo
    function actualizarActiveLink() {
      const links = document.querySelectorAll(".menu .links a");
      const currentHash = window.location.hash;

      //if (!currentHash) return; // sin hash no hace nada (para que /principios se mantenga iluminada al clicar desde la home)
      //está comentado porque si ahora al pulsar en el menú Inicio no borra el hash de donde vienes

      links.forEach(link => link.classList.remove("active"));
      links.forEach(link => {
        if (link.getAttribute("href") === currentHash) {
          link.classList.add("active");
        }
      });
  }

    // Ejecutar al cargar la página
    actualizarActiveLink();

    // Ejecutar cada vez que cambie el hash (clic o scroll con hash)
    window.addEventListener("hashchange", actualizarActiveLink);

