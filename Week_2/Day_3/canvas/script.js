const canvas = document.getElementById('example');

const ctx = canvas.getContext('2d');

function draw() {
  //Rectangles
  /* ctx.fillStyle = 'purple';
  //fillRect fills a rectangle at the specified position
  ctx.fillRect(25, 25, 200, 200);
  //clearRect clears a rectangular shape at the specified position
  ctx.clearRect(45, 45, 100, 100);
  //strokeRect will create the outline of a rectangle at the specified position
  ctx.strokeRect(500, 500, 80, 80); */

  //Paths
  //Paths are a collection of points that will form a line or a shape
  //We need to always begin a path and then close it at the end
  ctx.beginPath();
  //the moveTo method will "move the pen" to the desired position
  ctx.moveTo(50, 50);
  ctx.lineTo(250, 50);
  //we call stroke to paint our line
  ctx.stroke();
  ctx.lineTo(250, 300);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  //Fill will try to close the shape
  ctx.fill();
  ctx.closePath();

  // Use this equation to transform degrees into radians:
  //radians = (Math.PI/180) * degrees
  ctx.beginPath();
  //ctx.lineWidth = 20;
  ctx.strokeStyle = 'rgba(255, 0, 0, 0.2)';
  ctx.arc(700, 500, 75, 0, Math.PI * 2);
  ctx.stroke();
  ctx.closePath();

  //Gradients
  //To create gradients we need to store their value in a variable
  let grd = ctx.createLinearGradient(0, 0, 200, 0);
  //We can add color stops to our gradient. = is the beggining of the line, 1 is the end
  grd.addColorStop(0, 'red');
  grd.addColorStop(1, 'blue');
  //We can use fillStyle to paint something with our gradient instead of a single color
  ctx.fillStyle = grd;
  ctx.fillRect(10, 10, 200, 200);

  ctx.strokeStyle = 'black';
  ctx.font = '48px serif';
  ctx.fillText('Hello world', 500, 500);
  ctx.strokeText('Hello world', 500, 300);
}

//draw();
//Creating an image

tileX = 0;
tileY = 0;
function usingImage() {
  const tileImg = new Image();

  //define the source
  tileImg.src = './images/tile.jpg';
  if (tileX + 50 > canvas.width) {
    tileX = 0;
  }

  ctx.clearRect(0, 0, 1200, 600);
  tileImg.addEventListener('load', () => {
    ctx.drawImage(tileImg, tileX, tileY, 50, 50);
  });

  tileX += 3;

  /* setTimeout(() => {
    usingImage();
  }, 30); */
}

function patternImg() {
  const tileImg = new Image();

  //define the source
  tileImg.src = './images/tile.jpg';
  //
  tileImg.addEventListener('load', () => {
    let tilePattern = ctx.createPattern(tileImg, 'repeat');
    ctx.fillStyle = tilePattern;
    ctx.fillRect(0, 0, 1200, 600);
  });
}

//patternImg();

//usingImage();
