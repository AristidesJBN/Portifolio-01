document.addEventListener("DOMContentLoaded", function() {
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var card1 = document.getElementById("card1");
    var card2 = document.getElementById("card2");

    function ocultarTodosCartoes() {
      document.getElementById('card1').style.display = 'none';
      document.getElementById('card2').style.display = 'none';
      document.getElementById('card3').style.display = 'none';
      document.getElementById('cardConstruct').style.display = 'none';
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
        document.getElementById('cardConstruct').style.display = 'none';
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

    btn4.addEventListener("click", function botao() {
      if (cardConstruct.style.display === "block") {
        cardConstruct.style.display = "none";
      } else {
        cardConstruct.style.display = "block";
      }
    });
  }
);

var urlCJ = 'https://card-jitsu.netlify.app';
var urlmemed = 'https://assinatura-med.netlify.app';
var urlSO = 'https://praticas-so.netlify.app'
var urlSUR = 'https://superunorocketdemo-01.netlify.app';
var urlPK = 'https://plagiokingdom.netlify.app';
var urlPAC = 'https://pdac-102v.netlify.app';

function cardJitsu() {
  window.open(urlCJ, '_blank');
}

function memed() {
  window.open(urlmemed, '_blank');
}

function atvSO() {
  window.open(urlSO, '_blank');
}

function playSUR() {
  window.open(urlSUR, '_blank');
}

function playPK() {
  window.open(urlPK, '_blank');
}

function playPAC() {
  window.open(urlPAC, '_blank');
}