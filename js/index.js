document.addEventListener("DOMContentLoaded", function() {
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var card1 = document.getElementById("card1");
    var card2 = document.getElementById("card2");
    var btnPong = document.getElementById("btnPong");

    function ocultarTodosCartoes() {
      document.getElementById('card1').style.display = 'none';
      document.getElementById('card2').style.display = 'none';
      document.getElementById('card3').style.display = 'none';
      document.getElementById('cardConstruct').style.display = 'none';
      document.getElementById('cardPong').style.display = 'none';
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

    btnPong.addEventListener("click", function botao() {
      if (cardPong.style.display === "block") {
        cardPong.style.display = "none";
        btnPong.textContent = "Jogar Pong";
      } else {
        cardPong.style.display = "block";
        btnPong.textContent = "Fechar jogo";
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

//Pong

const leftPaddle = document.getElementById('leftPaddle');
const rightPaddle = document.getElementById('rightPaddle');
const ball = document.getElementById('ball');

const containerWidth = 584;
const containerHeight = 350;

let ballX = containerWidth / 2;
let ballY = containerHeight / 2;
let ballSpeedX = 5;
let ballSpeedY = 5;

const paddleSpeed = 10;

const keys = {};

let player1Score = 0;
let player2Score = 0;

const player1ScoreElement = document.getElementById('player1Score');
const player2ScoreElement = document.getElementById('player2Score');

document.addEventListener('keydown', (event) => {
    keys[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});

function update() {
    if (keys['w'] && leftPaddle.offsetTop > 0) {
        leftPaddle.style.top = (leftPaddle.offsetTop - paddleSpeed) + 'px';
    }

    if (keys['s'] && leftPaddle.offsetTop + leftPaddle.clientHeight < containerHeight) {
        leftPaddle.style.top = (leftPaddle.offsetTop + paddleSpeed) + 'px';
    }

    if (keys['ArrowUp'] && rightPaddle.offsetTop > 0) {
        rightPaddle.style.top = (rightPaddle.offsetTop - paddleSpeed) + 'px';
    }

    if (keys['ArrowDown'] && rightPaddle.offsetTop + rightPaddle.clientHeight < containerHeight) {
        rightPaddle.style.top = (rightPaddle.offsetTop + paddleSpeed) + 'px';
    }

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY <= 0 || ballY + ball.clientHeight >= containerHeight) {
        ballSpeedY = -ballSpeedY;
    }

    if (
        ballX <= leftPaddle.offsetLeft + leftPaddle.clientWidth &&
        ballY >= leftPaddle.offsetTop &&
        ballY <= leftPaddle.offsetTop + leftPaddle.clientHeight
    ) {
        ballSpeedX = -ballSpeedX;
    }

    if (
        ballX + ball.clientWidth >= rightPaddle.offsetLeft &&
        ballY >= rightPaddle.offsetTop &&
        ballY <= rightPaddle.offsetTop + rightPaddle.clientHeight
    ) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballX <= 0) {
        ballX = containerWidth / 2;
        ballY = containerHeight / 2;
        ballSpeedX = 5;
        ballSpeedY = 5;
        player2Score++;
        player2ScoreElement.textContent = `Player 2: ${player2Score}`;
    }

    if (ballX >= containerWidth - ball.clientWidth) {
        ballX = containerWidth / 2;
        ballY = containerHeight / 2;
        ballSpeedX = -5;
        ballSpeedY = 5;
        player1Score++;
        player1ScoreElement.textContent = `Player 1: ${player1Score}`;
    }

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';

}

setInterval(update, 20);