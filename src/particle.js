export default function Particle(sk) {
  this.pos = sk.createVector(0, 0);
  this.vel = sk.createVector(0, 0);
  this.acc = sk.createVector(0, 0);

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.applyForce = function(force) {
    this.acc.add(force);
  };

  this.show = function() {
    sk.stroke(0);
    sk.point(this.pos.x, this.pos.y);
  };
}
