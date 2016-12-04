export default class Background {
  constructor(width, height, color = 'black') {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw = (ctx) => {
    const { width, height, color } = this;
    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    ctx.fillStyle = color;
    ctx.fill();
  }

  move = () => {}
}
