import p5 from "p5";

export default function Particle(sk, scl, cols) {
  this.pos = sk.createVector(sk.random(sk.width), sk.random(sk.height));
  this.vel = sk.createVector(0, 0);
  this.acc = sk.createVector(0, 0);
  this.maxSpeed = 4;
  this.h = 0;

  this.prevPos = this.pos.copy();

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.follow = function(noise) {
    let x = sk.floor(this.pos.x / scl);
    let y = sk.floor(this.pos.y / scl);
    let index = x + y * cols;

    let r = noise[index] * sk.TWO_PI * 4;
    let v = p5.Vector.fromAngle(r);
    v.setMag(1);

    this.applyForce(v);
  };

  this.applyForce = function(force) {
    this.acc.add(force);
  };

  this.show = function() {
    sk.stroke(`rgba(0,0,0,${this.h})`);
    if (this.h < 0.05) {
      this.h += 0.001;
    }
    sk.strokeWeight(1);

    sk.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  };

  this.updatePrev = () => {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  };
  this.edges = function() {
    if (this.pos.x > sk.width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = sk.width;
      this.updatePrev();
    }
    if (this.pos.y > sk.height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = sk.height;
      this.updatePrev();
    }
  };
}
