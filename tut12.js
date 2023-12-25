const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Canvas Mouse Interaction

const canvas_height = 600;
const canvas_width = 600;

canvas.style.background = "#ffa";

let radius_max = 30;
let radius_min = 0;

const circle = {
  x: canvas_width / 2,
  y: canvas_height / 2,
  radius: radius_min,
  speed: 0.25,
};

function draw() {
  ctx.beginPath();

  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);

  ctx.lineWidth = 2;
  ctx.strokeStyle = "grey";
  ctx.stroke();

  ctx.closePath();
}

function update() {
  ctx.clearRect(0, 0, canvas_width, canvas_height);

  circle.radius += circle.speed;
  if (circle.radius > radius_max) {
    circle.radius = radius_min;
  }

  draw();

  requestAnimationFrame(update);
}

update();

let mouse_move = function (e) {
  e.preventDefault();

  circle.x = e.offsetX;
  circle.y = e.offsetY;
};

let mouse_out = function (e) {
  e.preventDefault();
  circle.x = canvas_width / 2;
  circle.y = canvas_height / 2;
};

canvas.onmousemove = mouse_move;
canvas.onmouseout = mouse_out;
