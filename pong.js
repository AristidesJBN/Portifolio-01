document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("idbutton");
    var campo = document.getElementById("idcampo");
    var infocard = document.getElementById("idcard");
  
    button.addEventListener("click", function botao() {
      if (campo.style.display === "block") {
        campo.style.display = "none";
        button.textContent = "Jogar Pong";
      } else {
        campo.style.display = "block";
        button.textContent = "Parar jogo";
      }
    });
  
    var links = document.querySelectorAll("a");
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        var color = this.getAttribute("data-color");
        fJS(color);
      });
    });
  
    function fJS(color) {
      infocard.style.display = "block";
      switch (color) {
        case "orange":
          infocard.style.backgroundColor = "orange";
          break;
        case "blue":
          infocard.style.backgroundColor = "rgb(65, 160, 255)";
          break;
        case "yellow":
          infocard.style.backgroundColor = "yellow";
          break;
        default:
          infocard.style.backgroundColor = "white";
          break;
      }
    }
  });
  