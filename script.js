// Datos de contacto: llénalos cuando el cliente los confirme.
// Si hay WhatsApp, el formulario abre un chat con el mensaje listo; si no, abre el correo.
var CONTACT = {
  whatsapp: "", // formato internacional sin signos, ej. 5214421234567
  email: ""     // ej. contacto@rakigora.com
};

(function () {
  var btn = document.getElementById("menu-btn");
  var nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  var form = document.getElementById("contact-form");
  var note = document.getElementById("form-note");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = form.elements;
      var text =
        "Hola, quiero solicitar una cotización.\n" +
        "Nombre: " + f.nombre.value + "\n" +
        "Empresa: " + f.empresa.value + "\n" +
        "Correo: " + f.correo.value + "\n" +
        "WhatsApp: " + f.whatsapp.value + "\n" +
        "Tipo de proyecto: " + f.tipo.value + "\n\n" +
        f.mensaje.value;
      if (CONTACT.whatsapp) {
        window.open("https://wa.me/" + CONTACT.whatsapp + "?text=" + encodeURIComponent(text), "_blank", "noopener");
      } else if (CONTACT.email) {
        window.location.href = "mailto:" + CONTACT.email + "?subject=" +
          encodeURIComponent("Solicitud de cotización") + "&body=" + encodeURIComponent(text);
      } else if (note) {
        note.textContent = "Versión de demostración: aún no hay un destino configurado para el formulario.";
      }
    });
  }
})();
