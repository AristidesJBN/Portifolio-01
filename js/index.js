document.addEventListener("DOMContentLoaded", function() {
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var card1 = document.getElementById("card1");
    var card2 = document.getElementById("card2");

    function ocultarTodosCartoes() {
      document.getElementById('card1').style.display = 'none';
      document.getElementById('card2').style.display = 'none';
      document.getElementById('card3').style.display = 'none';
  }
      
    btn1.addEventListener("click", function botao() {
      if (card1.style.display === "block") {
        card1.style.display = "none";
      } else {
        ocultarTodosCartoes(); 
        card1.style.display = "block";
      }
    });

    btn2.addEventListener("click", function botao() {
      if (card2.style.display === "block") {
        card2.style.display = "none";
      } else {
        ocultarTodosCartoes(); 
        card2.style.display = "block";
      }
    });

    btn3.addEventListener("click", function botao() {
      if (card3.style.display === "block") {
        card3.style.display = "none";
      } else {
        ocultarTodosCartoes(); 
        card3.style.display = "block";
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
  })

  function constructPage() {
    window.location.href = 'construct2.html';
}
  function cardJitsu() {
    window.location.href = 'https://card-jitsu.netlify.app';
}

function memed() {
  window.location.href = 'https://assinatura-med.netlify.app';
}