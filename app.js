const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// Variables

// Vitesse sur x
vx = 0;
// Vitesse sur y
vy = -10;


let snake = [{
    x: 140,
    y: 150
  },
  {
    x: 130,
    y: 150
  },
  {
    x: 120,
    y: 150
  },
  {
    x: 110,
    y: 150
  },
]

function animation() {
  setTimeout(function () {
    cleanCanvas();
    moveSnack();
    drawSnake();
    animation();
  }, 100);
}

function cleanCanvas() {
  
  ctx.fillStyle = "white";
  ctx.strokeStyle = "grey";
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.strokeRect(0, 0, canvas.width, canvas.height)
  
}

function drawPiece(piece) {
  
  ctx.fillStyle = "#00fe14";
  ctx.strokeStyle = "black";
  ctx.fillRect(piece.x, piece.y, 10, 10);
  ctx.strokeRect(piece.x, piece.y, 10, 10);
  
}

function drawSnake() {
  
  snake.forEach(piece => {
    drawPiece(piece);
  })
  
}

function moveSnack() {
  
  const head = {
    x: snake[0].x + vx,
    y: snake[0].y + vy
  };
  snake.unshift(head);
  snake.pop();
}

drawSnake();
animation();