// Define language reload anchors

var dataReload = document.querySelectorAll("[data-reload]")

var language = {
  eng: {
    title: "Web Builder - Front End Developer",
  },
  es: {
    title: "Desarrollador Web - Front End",
    vacancies: "Posiciones Vacantes",
    sales1:
      "Si necesitas una web para ti o para tu negocio, ponte en contacto y hablamos de tu proyecto.",
    sales2:
      "Si tienes una vacante en tu empresa y crees que podríamos trabajar bien juntos, hablemos!",
    sales3: "Herramientas esenciales",
    design: "Diseño",
    tools2: "Herramientas que he usado",
    deploy: "Implementación",
    // sales4:
    //   "Tecnologías que me gusta usar y que hacen mi trabajo más fácil: React.js, TailwindCSS, Bootstrap4, node.js, Netlify.",
    // sales5: "Tecnologías que he usado: JQuery, filezilla, gulp.js",
    waveHover: "CABALGA LA HOLA",
    hairHover: "CAMBIO DE LOOK",
    spanishHover: "ESPAÑOL PARA PRINCIPIANTES",
    viralHover: "IMPRONTA VIRAL BANDA INDIE-ROCK",
    nombre: "Nombre",
    email: "Correo Electrónico",
    telefono: "Teléfono",
    mensaje: "Mensaje",
    modal1title: "OLAS",
    modal1desc:
      "Un ejemplo de una web para una escuela de surf. Simple, eficaz y funcional sitio de una sola página. Es responsiva y se ve bien en pantallas de todos los tamaños.",
    modal1close: "Cerrar Ventana",
    modal2title: "CAMBIO DE LOOK",
    modal2desc:
      "Un ejemplo de una web para una peluquería. Diseño estilizado, limpio y responsivo.",
    modal2close: "Cerrar Ventana",
    modal3title: "APRENDE ESPAÑOL",
    modal3desc: "Una web para estudiantes de español.",
    modal3close: "Cerrar Ventana",
    modal4title: "Rock'n Roll",
    modal4desc: "El  portal de la banda Alicantina Impronta Viral.",
    modal4close: "Cerrar Ventana",
  },
}

// Define language via window hash
var prof_title = document.getElementById("prof_title")

if (window.location.hash) {
  if (window.location.hash === "#es") {
    prof_title.textContent = language.es.title
    sales1.textContent = language.es.sales1
    sales2.textContent = language.es.sales2
    sales3.textContent = language.es.sales3
    vacancies.textContent = language.es.vacancies
    design.textContent = language.es.design
    tools2.textContent = language.es.tools2
    deploy.textContent = language.es.deploy
    // sales4.textContent = language.es.sales4
    // sales5.textContent = language.es.sales5
    waveHover.textContent = language.es.waveHover
    hairHover.textContent = language.es.hairHover
    spanishHover.textContent = language.es.spanishHover
    viralHover.textContent = language.es.viralHover
    menuBtn.textContent = "MENÚ"
    portLink.textContent = "TRABAJOS"
    aboutLink.textContent = "ACERCA DE MÍ"
    contactLink.textContent = "CONTACTO"
    portfolioMain.textContent = "TRABAJOS"
    aboutMain.textContent = "ACERCA DE MÍ"
    contactMain.textContent = "CONTACTO"
    modal1title.textContent = language.es.modal1title
    modal1desc.textContent = language.es.modal1desc
    modal1close.textContent = language.es.modal1close

    modal2title.textContent = language.es.modal2title
    modal2desc.textContent = language.es.modal2desc
    modal2close.textContent = language.es.modal2close

    modal3title.textContent = language.es.modal3title
    modal3desc.textContent = language.es.modal3desc
    modal3close.textContent = language.es.modal3close

    modal4title.textContent = language.es.modal4title
    modal4desc.textContent = language.es.modal4desc
    modal4close.textContent = language.es.modal4close
  }
}

// Define language reload onclick iteraion

function reloadPage() {
  setTimeout(function () {
    location.reload()
  }, 1000)
}

// function reloadPage() {
//   location.reload(true);
// }
// for (i = 0; i <= dataReload.length; i++) {
//   dataReload[i].onclick = function () {

//   };
// }
