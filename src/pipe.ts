import { Bird } from "./bird";

export class Pipe {
  top = Math.random() * 700;
  bot:number;
  w = 50;
  dx = 4;
  x = 1000;
  constructor(public ctx: CanvasRenderingContext2D) {
    this.bot = this.top + 300
  }

  show() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.x, 0, this.w, this.top);
    this.ctx.fillRect(this.x, this.bot, this.w, 1000 - this.bot);
  }

  update() {
    this.x -= this.dx;
  }

  hits(bird: Bird) {
    if (bird.x + bird.w > this.x && bird.x < this.x + this.w) {
      if (!(bird.y > this.top && bird.y + bird.w < this.bot)) {
        return true;
      }
    }
    return false
  }
}
