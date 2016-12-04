import { G } from './constants';

export default class Planet {
  constructor(x = 0, y = 0, color = 'red', mass = 150, rho = 1) {
    this.x = x;
    this.y = y;
    this.mass = mass;
    this.r = Math.sqrt(mass) / rho;
    this.color = color;

    this.velX = 0;    // vel = a * t;
    this.velY = 0;

    this.accX = 0;    // F = m*a
    this.accY = 0;
  }

  setVelocity = (velX, velY) => {
    this.velX = velX;
    this.velY = velY;
  }

  calculateNetForce = (planets) => {
    const { x: x1, y: y1, mass: m1 } = this;
    let fx = 0, fy = 0;   // Force in two direction
    planets.forEach(p => {
      const { x: x2, y: y2, mass: m2 } = p;
      const deltX = x1 - x2, deltY = y1 - y2;
      const r = Math.sqrt(Math.pow(deltX, 2) + Math.pow(deltY, 2));
      const fg = G * m1 * m2 / r;
      fx += fg * deltX / r;
      fy += fg * deltY / r;
    });
    this.accX = fx / m1;  // a = F / m
    this.accY = fy / m1;
  }

  move = () => {
    this.velX += this.accX;
    this.velY += this.accY;
    this.x += this.velX;
    this.y += this.velY;
  }

  draw = (ctx) => {
    const { x, y, r, color } = this;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }
}
