import { G } from './constants';

export default class Planet {
  constructor(x = 0, y = 0, color = 'red', mass = 1500, rho = 4) {
    this.x = x;
    this.y = y;
    this.mass = mass;
    this.r = Math.cbrt(mass) / rho;
    this.color = color;

    this.velX = 0;    // vel = a * t;
    this.velY = 0;

    this.accX = 0;    // F = m*a
    this.accY = 0;
  }

  collide = (p2) => {
    const { x: x1, y: y1, r: r1 } = this;
    const { x: x2, y: y2, r: r2 } = p2;
    const deltX = x1 - x2, deltY = y1 - y2;
    const dist = Math.sqrt(Math.pow(deltX, 2) + Math.pow(deltY, 2));
    if (dist < (r1 + r2)) {
      return true;
    }
    return false;
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
      const fg = G * m1 * m2 / Math.pow(r, 2);
      fx += fg * deltX / r;
      fy += fg * deltY / r;
      if (p.collide(this)) {
        fx = -fx * 0.1;
        fy = -fy * 0.1;
      }
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
