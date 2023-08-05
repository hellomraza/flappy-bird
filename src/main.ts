import { Bird } from "./bird";
import { Pipe } from "./pipe";

class Game {
  constructor() {}

  bird: Bird;

  dim = 1000;

  ctx: CanvasRenderingContext2D;

  pipes: Pipe[] = [];
  
  point=0

  startGame() {
    const canvas = document.getElementById("game") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (ctx) this.ctx = ctx;

    const ele = document.getElementById('app')
    const p = document.createElement('h1')
    p.innerText= this.point.toString()

    ele?.appendChild(p)

    this.bird = new Bird(this.ctx, this.dim);

    document.addEventListener("click", () => this.bird.bounce());

    setInterval(() => this.pipes.push(new Pipe(this.ctx)), 1500);

    const aminate = () => {
      const req = requestAnimationFrame(aminate);
      this.bird.show();
      this.bird.drop()
      if (this.bird.x < 0 || this.bird.x > 1000) cancelAnimationFrame(req);
      this.pipes.forEach((pipe) =>{ 
       if (pipe.hits(this.bird)) cancelAnimationFrame(req)
        pipe.show()
        pipe.update()
      });
      if (this.pipes[0].x < -100){
         this.pipes.shift()
         this.point++
        p.innerText = this.point.toString()
        };
    };
    aminate();
  }
}

const game = new Game();

game.startGame();
