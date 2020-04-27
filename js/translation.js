// Define language reload anchors

var dataReload = document.querySelectorAll("[data-reload]");

var language = {
  eng: {
    title: "Web Builder - Front End Developer",
  },
  es: {
    title: "Desarrollador Web - Front End",
    sales1:
      "Si necesitas una web para ti o para tu negocio, ponte en contact y hablamos de tu project.",
    sales2: "Mi tecnología esencial: HTML, CSS y Javascript",
    sales3: "Herramientas esenciales: git, npm, gitHub, figma",
    sales4:
      "Tecnologías que me gusta usar y que hacen mi trabajo más fácil: React.js, TailwindCSS, Bootstrap4, node.js, Netlify.",
    sales5: "Tecnologías que he usado: JQuery, filezilla, gulp.js",
    waveHover: "CABALGA LA HOLA",
    hairHover: "CAMBIO DE LOOK",
    spanishHover: "ESPAÑOL PARA PRINCIPIANTES",
    viralHover: "IMPRONTA VIRAL BANDA INDIE-ROCK",
    nombre: "Nombre",
    email: "Correo Electrónico",
    telefono: "Teléfono",
    mensaje: "Mensaje",
  },
};

// Define language via window hash
var prof_title = document.getElementById("prof_title");

if (window.location.hash) {
  if (window.location.hash === "#es") {
    prof_title.textContent = language.es.title;
    sales1.textContent = language.es.sales1;
    sales2.textContent = language.es.sales2;
    sales3.textContent = language.es.sales3;
    sales4.textContent = language.es.sales4;
    sales5.textContent = language.es.sales5;
    waveHover.textContent = language.es.waveHover;
    hairHover.textContent = language.es.hairHover;
    spanishHover.textContent = language.es.spanishHover;
    viralHover.textContent = language.es.viralHover;
    document.getElementById("name").placeholder = language.es.nombre;
    document.getElementById("email").placeholder = language.es.email;
    document.getElementById("phone").placeholder = language.es.telefono;
    document.getElementById("message").placeholder = language.es.mensaje;
    sendMessageButton.textContent = "Enviar";
    menuBtn.textContent = "MENÚ";
    portLink.textContent = "TRABAJOS";
    aboutLink.textContent = "ACERCA DE MÍ";
    contactLink.textContent = "CONTACTO";
    portfolioMain.textContent = "TRABAJOS";
    aboutMain.textContent = "ACERCA DE MÍ";
    contactMain.textContent = "CONTACTO";
  }
}

// Define language reload onclick iteraion

function reloadPage() {
  setTimeout(function () {
    location.reload();
  }, 100);
}

// function reloadPage() {
//   location.reload(true);
// }
// for (i = 0; i <= dataReload.length; i++) {
//   dataReload[i].onclick = function () {

//   };
// }
