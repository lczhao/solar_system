export default class Universe {
  constructor(planets) {
    this.planets = planets;
  }

  move = () => {
    this.planets.forEach((p, i) => {
      const planetsCopy = [...this.planets];
      planetsCopy.splice(i, 1);
      p.calculateNetForce(planetsCopy);
    });
    this.planets.forEach(p => p.move());
  }

  draw = (ctx) => {
    this.planets.forEach(p => p.draw(ctx));
  }
}
