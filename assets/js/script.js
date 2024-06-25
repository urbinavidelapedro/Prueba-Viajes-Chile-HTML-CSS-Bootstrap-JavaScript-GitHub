/* Habilitar toolptips */
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  
  $(document).ready(function () {
    /*Evento “click” de jquery para mostrar una alerta al hacer un clicK
              sobre el botón de "Enviar por Correo" mediante el uso de los selectores por Id*/
    $("#enviarCorreo").click(function () {
      alert("El correo fue enviado correctamente...");
    });
  
    /*Evento smooth scroll*/
  
    $("a").on("click", function (event) {
      // Nos que al hacer click la seccion tenga un id antes de anular el comportamiento
      if (this.hash !== "") {
        event.preventDefault();
        // creamos una variable hash para contener el hash
        var hash = this.hash;
        // Usando el método animate() de jQuery para agregar un desplazamiento suave de la página
        // El número opcional (800) especifica el número de milisegundos que se necesitan para desplazarse al área especificada
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          3000,
          function () {}
        );
      }
    });
  
    // Cambia el background del nav cuando el scroll se mueva mas de 200px
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 200) {
        $("nav").addClass("scrolled");
      } else {
        $("nav").removeClass("scrolled");
      }
    });
  });