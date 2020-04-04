import "./style.css";
import p5 from "p5";
import Particle from "./particle";

let inc = 0.1;
let scl = 5;
let cols, rows;

let time = 0;

let fr;
let particles = [];
let flowField;

let s = sk => {
  sk.setup = () => {
    sk.createCanvas(window.innerWidth, window.innerHeight);
    cols = sk.floor(sk.width / scl);
    rows = sk.floor(sk.width / scl);
    fr = sk.createP("");

    for (let i = 0; i < 1000; i++) {
      particles[i] = new Particle(sk, scl, cols);
    }

    flowField = new Array(cols * rows);
  };

  sk.draw = () => {
    let yOff = 0;
    for (let y = 0; y < rows; y++) {
      let xOff = 0;
      for (let x = 0; x < cols; x++) {
        let index = x + y * cols;
        flowField[index] = sk.noise(xOff, yOff, time);
        xOff += inc;
      }
      yOff += inc;
      time += 0.5;
    }

    for (let i = 0; i < particles.length; i++) {
      particles[i].follow(flowField);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }

    fr.html(sk.floor(sk.frameRate()));
  };
};

new p5(s);
