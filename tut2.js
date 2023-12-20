const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Animation - Bouncing Ball in a Box

const circle = {
  x: 200,
  y: 200,
  size: 30,
  dx: 3,
  dy: 2,
};

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
  ctx.fillStyle = "purple";
  ctx.fill();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();

  // change position
  circle.x += circle.dx;
  circle.y += circle.dy;

  // Detect side walls

  // Left and Right Walls
  if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
    circle.dx *= -1;
  }

  // Top and Bottom walls
  if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
    circle.dy *= -1;
  }

  requestAnimationFrame(update);
}

update();
