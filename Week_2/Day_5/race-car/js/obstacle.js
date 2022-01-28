class Obstacle {
  constructor(game) {
    this.game = game;
    this.x = Math.floor(Math.random() * 350);
    this.y = 0;
    this.width = Math.floor(Math.random() * 250 + 100);
    this.height = 50;
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

  draw() {
    this.game.ctx.fillStyle = 'red';
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
