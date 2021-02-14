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

document.addEventListener('keydown', changeDirection);

function changeDirection(event) {

  const KEY_LEFT = 37;
  const KEY_RIGHT = 39;
  const KEY_UP = 38;
  const KEY_DOWN = 40;

  const direction = event.keyCode;

  const up = vy === -10;
  const down = vy === 10;
  const right = vx === 10;
  const left = vx === -10;
  
  if (direction === KEY_LEFT && !right) { vx = -10; vy = 0; }
  if (direction === KEY_RIGHT && !left) { vx = 10; vy = 0; }
  if (direction === KEY_UP && !down) { vx = 0; vy = -10; }
  if (direction === KEY_DOWN && !up) { vx = 0; vy = 10; }
}