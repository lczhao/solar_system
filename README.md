# solar_system
js + canvas
Space simulator!!!!

Run
-----------------------
Make sure you have Node.js installed on your laptop
~~~~~~~~~~~~~~~~~~~~~~~~
npm install
npm run start
~~~~~~~~~~~~~~~~~~~~~~~~

Tweaks
----------------------
Use the Planet class to add planets! And Universe to manage your Planet!
~~~~~~~~~~~~~~~~~~~~~
// see app.js for full example

// x, y => coordinates
// color => css color code
// mass => mass of the planet, rho => density of the planet
const planet = new Planet(x, y, color, mass, rho);
planet.setVelocity(velX, velY);

const universe = new Universe([planet1, planet2 ....]);
~~~~~~~~~~~~~~~~~~~~~

Things to try:
--------------------
 - Solar System: one planet is large, high density. Others are small, low density
 - Two Body: two equal massed, one starts with velY = 0.5, other one with velY = -0.5. Tweaks the number to get them forever spins!
 - [Three Body Problem](https://www.amazon.com/Three-Body-Problem-Cixin-Liu/dp/0765382032/ref=sr_1_1?ie=UTF8&qid=1480895875&sr=8-1&keywords=three+body+problem): three equal massed, random start velocity. 
