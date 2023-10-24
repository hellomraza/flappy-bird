export class Bird {
  constructor(public ctx: CanvasRenderingContext2D, public dim: number) {
    this.image.src = "/img/flappy.png";
  }
  y = 500;
  x = 100;
  dy = 1;
  w = 30;

  image = new Image();

  show() {
    this.ctx.clearRect(0, 0, 1000, 1000);
    this.ctx.fillStyle = "blue";
    this.ctx.drawImage(this.image, this.x, this.y, this.w, this.w);
  }

  drop() {
    this.y += this.dy;
    if (this.dy < 10) this.dy += 0.15;
  }

  bounce() {
    this.dy = -4;
  }
}
