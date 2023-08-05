export class Bird {
  constructor(public ctx: CanvasRenderingContext2D, public dim: number) {}
  x = 500;
  y = 100
  dx = 1;
  w = 30;

  show() {
    this.ctx.clearRect(0, 0, 1000, 1000);
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.y, this.x, this.w, this.w);
  }

  drop() {
    this.x += this.dx;
    if (this.dx < 10) this.dx += 0.15;
  }

  bounce() {
    this.dx = -4;
  }
}
