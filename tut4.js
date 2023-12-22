const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Canvas Object Interaction Events - Colour Change of Circle on Click
let color = "red";

function drawCircle() {
  ctx.beginPath();

  ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2, false);

  ctx.strokeStyle = "grey";
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.fill();

  ctx.closePath();
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
  clear();
  drawCircle();
  requestAnimationFrame(update);
}

update();

function onClickMouse(e) {
  console.log(e);
  const rect = canvas.getBoundingClientRect();
  console.log(rect);

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  console.log(x, y);

  const distance = Math.sqrt(
    (x - canvas.width / 2) * (x - canvas.width / 2) +
      (y - canvas.height / 2) * (y - canvas.height / 2)
  );
  console.log(distance);

  if (distance < 100) {
    if (color === "blue") {
      color = "red";
    } else {
      color = "blue";
    }
  }
}

canvas.addEventListener("click", onClickMouse);
