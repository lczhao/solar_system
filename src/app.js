/* global document */
import Planet from './Planet';
import Universe from './Universe';
import Background from './Background';
import EventManager from './EventManager';
import { WIDTH, HEIGHT, FRAME_RATE } from './constants';

// initialize canvas
const canvas = document.getElementById('app');
const ctx = canvas.getContext('2d');

// initalize planets
const bg = new Background(WIDTH, HEIGHT);
const p1 = new Planet(WIDTH / 2, HEIGHT / 2, 'yellow', 5000000);
const p2 = new Planet(WIDTH / 2 + 250, HEIGHT / 2, 'blue', 500);
const p3 = new Planet(WIDTH / 2 + 200, HEIGHT / 2, 'red', 500);
const p4 = new Planet(WIDTH / 2 + 253, HEIGHT / 2, 'red', 1, 1);

p2.setVelocity(0, 1.43);
p3.setVelocity(0.0, 1.30);
p4.setVelocity(0, 1.30);

const universe = new Universe([ p1, p2, p3, p4 ]);

// initialize EM
const em = new EventManager(FRAME_RATE, ctx);
em.addEntity(bg);
em.addEntity(universe);

// start the main loop
em.start();
