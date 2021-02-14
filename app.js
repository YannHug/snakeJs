const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "white";
ctx.strokeStyle = "grey";
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.strokeRect(0, 0, canvas.width, canvas.height)

let snake = [
  {
    x: 140, y:150
  },
  {
    x: 130, y:150
  },
  {
    x: 120, y:150
  },
  {
    x: 110, y:150
  },
]

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

drawSnake();