const canvas = document.getElementById('animation');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;

/* function drawSquares(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
} */

/* drawSquares(10, 20, 100, 100, 'turquoise');
ctx.save();

drawSquares(100, 200, 100, 100, 'orangeRed');
ctx.save();

drawSquares(250, 250, 100, 100, 'magenta');

ctx.restore();
ctx.restore();
drawSquares(400, 200, 100, 100);

drawSquares(500, 100, 100, 100); */

const color = {
  red: Math.floor(Math.random() * 255),
  green: Math.floor(Math.random() * 255),
  blue: Math.floor(Math.random() * 255),
  rgb: function () {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  },
};

/* let x = 0;
function updateCanvas() {
  color.red = (color.red + 1) % 255;
  color.green = (color.green + 1) % 255;
  color.blue = (color.blue + 1) % 255;

  ctx.clearRect(0, 0, cWidth, cHeight);
  ctx.fillStyle = color.rgb();
  ctx.fillRect(x, 0, 500, 500);
  x++;
  requestAnimationFrame(updateCanvas);
}

updateCanvas(); */
/* const canvas = document.getElementById('animation');
const ctx = canvas.getContext('2d'); */

/* const cWidth = canvas.width;
const cHeight = canvas.height; */

/* let speed1 = cWidth;
let speed2 = 0;
let speed3 = 600;

function clearCanvas() {
  ctx.clearRect(0, 0, cWidth, cHeight);
}

function drawSquares(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function animated() {
  speed1 -= 1;
  speed2 += 2;
  speed3 -= 3;

  clearCanvas();

  drawSquares(speed1, 50, 100, 100, 'red');
  drawSquares(100, speed2, 100, 100, 'green');
  drawSquares(speed3, speed3, 100, 100, 'yellow');
  requestAnimationFrame(animated);
}

animated(); */

class Pokemon {
  constructor() {
    this.x = 25;
    this.y = 25;

    const imgObj = new Image();
    imgObj.addEventListener('load', () => {
      this.img = imgObj;
      this.draw();
    });
    imgObj.src =
      'https://www.seekpng.com/png/full/182-1829970_caterpie-pokemon-sprite-animation-gifs.png';
  }
  moveUp() {
    this.y -= 25;
  }
  moveDown() {
    this.y += 25;
  }
  moveRight() {
    this.x += 25;
  }
  moveLeft() {
    this.x -= 25;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 50);
  }
}

const caterpie = new Pokemon();
console.log(caterpie);

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowUp':
      caterpie.moveUp();
      break;
    case 'ArrowDown':
      caterpie.moveDown();
      break;
    case 'ArrowRight':
      caterpie.moveRight();
      break;
    case 'ArrowLeft':
      caterpie.moveLeft();
      break;
  }
  updateCanvas();
});

ctx.fillStyle = 'black';
ctx.font = '18px serif';
function updateCanvas() {
  ctx.clearRect(0, 0, cWidth, cHeight);
  ctx.fillText('Caterpie x: ' + caterpie.x, 600, 100);
  ctx.fillText('Caterpie y: ' + caterpie.y, 600, 150);
  caterpie.draw();
}
