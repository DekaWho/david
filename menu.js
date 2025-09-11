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



//play al pulsar la miniatura
  const video = document.getElementById("presentacion");

  // Al hacer clic sobre el póster
  video.addEventListener("click", () => {
    // Activo los controles
    video.setAttribute("controls", "controls");

    // Reproduzco el vídeo
    video.play();
  });