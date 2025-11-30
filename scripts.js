
const cursor = document.getElementById("cursor");

/* Versión simple sin aceptar salto de línea*/
/* function typeWriter(element, text, speed = 50) {
  return new Promise(resolve => {
    if (!element) {
      resolve();
      return;
    }
    // Vaciar el elemento y preparar un nodo de texto
    element.textContent = "";
    const textNode = document.createTextNode("");
    element.appendChild(textNode);
    // Mover el cursor dentro del elemento, justo después del texto
    element.appendChild(cursor);
    let i = 0;
    function write() {
      if (i < text.length) {
        // Añadimos texto al nodo de texto, el cursor se mantiene detrás
        textNode.data += text.charAt(i);
        // Autoscroll
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
        i++;
        setTimeout(write, speed);
      } else {
        resolve();
      }
    }
    write();
  });
} */

function typeWriter(element, text, speed = 50) {
  return new Promise(resolve => {
    if (!element) {
      resolve();
      return;
    }
    element.innerHTML = "";
    element.appendChild(cursor);
    let content = "";
    let i = 0;

    function write() {
      if (i < text.length) {
        if (text.charAt(i) === '<') {
          const closeIndex = text.indexOf('>', i);
          if (closeIndex !== -1) {
            content += text.substring(i, closeIndex + 1);
            i = closeIndex + 1;
          }
        } else {
          content += text.charAt(i);
          i++;
        }
        element.innerHTML = content;
        element.appendChild(cursor);
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
        setTimeout(write, speed);
      } else {
        resolve();
      }
    }

    write();
  });
}


async function startTypewriter() {
  const t1 = document.querySelector(".t1");
  const p1 = document.querySelector(".p1");
  const p2 = document.querySelector(".p2");
  const p3 = document.querySelector(".p3");
  const p4 = document.querySelector(".p4");
  const p5 = document.querySelector(".p5");
  const p6 = document.querySelector(".p6");
  const p7 = document.querySelector(".p7");
  const p8 = document.querySelector(".p8");
  
  await typeWriter(t1, "[no_publicar]", 150);
  await typeWriter(p1, "¿Alguna vez has escuchado a alguien y pensado \"Menuda barbaridad acaba de soltar\"? Tú lo ves obvio, le han comido la cabeza. Repite el discurso de otra persona. Pobre...", 70);
  await typeWriter(p2, "¿Y si él piensa lo mismo de ti? ¿Y si los dos tenéis razón? No en lo que pensáis, sino en cómo llegasteis a pensarlo. \"Una mentira repetida mil veces se convierte en verdad\" ¿Te suena?", 60);
  await typeWriter(p3, "No hablo de conspiraciones. No hay un grupo de señores gordos y forrados en una sala oscura decidiendo qué va a ser de tu vida. Es peor que eso.", 50);
  await typeWriter(p4, "¿Crees que un título universitario te hace más válido?<br><br>¿Crees que todos los ricos son malas personas?<br><br>¿Crees que hipotecarte te da estabilidad?<br><br>¿Crees que ser funcionario es tener la vida resuelta?<br><br>¿Crees que está mal querer más de lo que tienes?<br><br>No juzgo tus respuestas, pregunto si alguna vez llegaste a esas conclusiones por tu propia cuenta.", 50);
  await typeWriter(p5, "Imagina que plantas un árbol en una maceta pequeña. El árbol crece pero las raíces no tienen donde ir. Se enroscan sobre sí mismas, se asfixian. El árbol sobrevive pero limitado por la maceta.", 50);
  await typeWriter(p6, "¿Cómo rompes la maceta? Yo no tengo todas las respuestas. Aunque siempre busco las mejores preguntas. Toda la vida, desde que fui un niño preguntón dando la turra. El problema hoy en día es que los algoritmos no buscan liberarte, buscan reducir tu maceta con dopamina rápida y scroll infinito. Por eso esto no encaja en ningún feed.", 50); 
  await typeWriter(p7, "Compartir ideas con naturalidad solo es posible si hablamos de tú a tú. Lo ideal sería un medio sin tecnología siquiera, enviarte una carta en papel: Llega a tus manos un sobre oscuro (muy elegante) con una barrabaja dorada en el centro. Al abrirlo sacas un folio doblado, y lees de mi puño y letra lo que un día te escribí. Sin más intermediarios que el papel. Pero hacerlo así es inviable, claro. Lo más parecido es poder enviarte un correo.", 70);


  await new Promise(resolve => setTimeout(resolve, 1000)); // Delay de 1s

  document.getElementById("form").style.display = "block"; //mostrar el form

  // Si quieres que el cursor desaparezca al final:
  // cursor.style.display = "none";
}

//el DOM ya está cargado cuando se ejecuta este script por el defer
  startTypewriter();

