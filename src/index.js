import "./style.css";
import p5 from "p5";

let xoff = 0;
let yoff = 200;

let s = sk => {
  sk.setup = () => {
    sk.createCanvas(window.innerWidth, window.innerHeight);
  };
  sk.draw = () => {
    let x = sk.map(sk.noise(xoff), 0, 1, 0, sk.width);
    let y = sk.map(sk.noise(yoff), 0, 1, 0, sk.height);

    xoff += 0.01;
    yoff += 0.01;

    sk.ellipse(x, y, 80, 80);
  };
};

new p5(s);
