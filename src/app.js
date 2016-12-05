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
const p1 = new Planet(WIDTH / 2, HEIGHT / 2, 'yellow', 500);
const p2 = new Planet(WIDTH / 2 + 300, HEIGHT / 2, 'blue', 500, 1);
const p3 = new Planet(WIDTH / 2 - 300, HEIGHT / 2, 'red', 500, 1);

p2.setVelocity(0, -1.5);
p3.setVelocity(0.0, 1.5);

const universe = new Universe([ p1, p2, p3 ]);

// initialize EM
const em = new EventManager(FRAME_RATE, ctx);
em.addEntity(bg);
em.addEntity(universe);

// start the main loop
em.start();
