import "./style.css";
import p5 from "p5";

let s = sk => {
  sk.setup = () => {
    sk.createCanvas(window.innerWidth, window.innerHeight);
  };
  sk.draw = () => {
    if (sk.mouseIsPressed) {
      sk.fill(0);
    } else {
      sk.fill(255);
    }
    sk.ellipse(sk.mouseX, sk.mouseY, 80, 80);
  };
  sk.frameRate(60);
};

new p5(s);
