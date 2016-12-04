export default class EventManager {
  constructor(frameRate, ctx) {
    this.frameRate = frameRate;
    this.entities = [];
    this.ctx = ctx;
  }

  addEntity = (entity) => {
    this.entities.push(entity);
  }

  redraw = () => {
    this.entities.forEach(entity => {
      entity.move();
      entity.draw(this.ctx);
    });
  }

  start() {
    this.timer = setInterval(this.redraw, 1000 / this.frameRate);
    // this.timer = setTimeout(this.redraw, 1000 / this.frameRate);
  }
}
