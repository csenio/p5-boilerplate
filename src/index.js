import "./style.css";
import p5 from "p5";
import Particle from "./particle";

let inc = 0.1;
let scl = 30;
let cols, rows;

let time = 0;

// let fr;
// let particles = [];

let s = sk => {
  sk.setup = () => {
    sk.createCanvas(800, 800);
    cols = sk.floor(sk.width / scl);
    rows = sk.floor(sk.width / scl);
    // fr = sk.createP("hey");

    // particles[0] = new Particle(sk);
  };

  sk.draw = () => {
    let yOff = 1;
    sk.background(255);
    time += 0.005;
    for (let y = 0; y < rows; y++) {
      let xOff = 1;
      for (let x = 0; x < cols; x++) {
        let r = sk.noise(xOff, yOff, time) * sk.TWO_PI;

        let v = p5.Vector.fromAngle(r);
        xOff += inc;
        sk.stroke(0);
        sk.push();
        sk.translate(x * scl, y * scl);
        sk.rotate(v.heading());
        sk.line(0, 0, scl, 0);

        sk.pop();
      }
      yOff += inc;
    }
    // particles[0].update();
    // particles[0].show();
    // fr.html(sk.floor(sk.frameRate()));
  };
};

new p5(s);
