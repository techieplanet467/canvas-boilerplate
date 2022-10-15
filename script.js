var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

class Particle {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    c.fillStyle = color;
    c.fill();
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}
var particles = [];
for (var i = 0; i < 20; i++) {
  //   particles.push(new Particle(10, 20, 4, 5, 5, "blue"));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  particles.forEach(function (particle) {
    particle.update();
  });
}
animate();

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min - 1) + min + 1);
}
