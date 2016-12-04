export default class Universe {
  constructor(planets) {
    this.planets = planets;
  }

  move = () => {
    // this.planets[0].calculateNetForce([this.planets[1]]);
    // this.planets[1].calculateNetForce([this.planets[0]]);
    this.planets.forEach((p, i) => {
      const planetsCopy = [...this.planets];
      planetsCopy.splice(i, 1);
      p.calculateNetForce(planetsCopy);
      p.move();
    });
  }

  draw = (ctx) => {
    this.planets.forEach(p => p.draw(ctx));
  }
}
