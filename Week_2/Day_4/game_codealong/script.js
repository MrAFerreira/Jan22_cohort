const myObstacles = [];

const myGameArea = {
  canvas: document.getElementById('game'),
  frames: 0,
  start: function () {
    this.ctx = this.canvas.getContext('2d');
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  },
  score: function () {
    const points = Math.floor(this.frames / 5);
    this.ctx.font = '48px serif';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(`Score: ${points}`, 1000, 50);
  },
};

function updateGameArea() {
  myGameArea.clear();
  player.newPos();
  player.update();
  updateObstacles();
  checkGameOver();
  myGameArea.score();
}

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  update() {
    const ctx = myGameArea.ctx;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const player = new Component(30, 30, 'red', 0, 110);

myGameArea.start();

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowUp':
      player.speedY -= 1;
      break;
    case 'ArrowDown':
      player.speedY += 1;
      break;
    case 'ArrowLeft':
      player.speedX -= 1;
      break;
    case 'ArrowRight':
      player.speedX += 1;
      break;
  }
});

document.addEventListener('keyup', (e) => {
  player.speedX = 0;
  player.speedY = 0;
});

function updateObstacles() {
  for (let i = 0; i < myObstacles.length; i++) {
    myObstacles[i].x -= 1;
    myObstacles[i].update();
  }

  myGameArea.frames += 1; //every 20 miliseconds

  if (myGameArea.frames % 120 === 0) {
    let x = myGameArea.canvas.width;
    let y = myGameArea.canvas.height;
    let minHeight = 40;
    let maxHeight = 300;

    let height = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);

    let minGap = 50;
    let maxGap = 200;

    let gap = Math.floor(Math.random() * (maxGap - minGap) + minGap);

    myObstacles.push(new Component(30, height, 'green', x, 0));
    myObstacles.push(new Component(30, y - height - gap, 'green', x, height + gap));
  }
}

function checkGameOver() {
  const crashed = myObstacles.some(function (obstacle) {
    return player.crashWith(obstacle);
  });

  if (crashed) {
    myGameArea.stop();
  }
}
