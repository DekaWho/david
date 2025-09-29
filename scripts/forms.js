   
// Incrustar los mailerLite forms

function insertForm(targetId) {
  const template = document.getElementById('lite-form').content;
  document.getElementById(targetId).appendChild(template.cloneNode(true));
}

insertForm('formPC');
insertForm('formMobile');


// scroll del CTA de la hero section (con iluminacion del menú)
// ya no hay scroll porque hay varios forms
/*function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

  section.scrollIntoView({ behavior: 'smooth' });
  history.pushState(null, null, `#${id}`);
  actualizarActiveLink();
}*/