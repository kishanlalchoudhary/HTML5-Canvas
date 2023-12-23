const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create Canvas Objecs with Loops

const canvas_height = 600;
const canvas_width = 600;

canvas.style.background = "#ffa";

class Circle {
  constructor(xpos, ypos, radius, color, text, speed) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.speed = speed;

    this.dx = this.speed;
    this.dy = this.speed;
  }

  draw(context) {
    context.beginPath();

    context.strokeStyle = this.color;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "20px Arial";
    context.fillText(this.text, this.xpos, this.ypos);
    // context.strokeText(this.text, this.xpos, this.ypos);

    context.lineWidth = 3;
    context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();
  }

  update(context) {
    this.xpos += this.dx;
    this.ypos += this.dy;

    if (this.xpos - this.radius < 0) {
      this.dx *= -1;
    } else if (this.xpos + this.radius > canvas_width) {
      this.dx *= -1;
    } else if (this.ypos - this.radius < 0) {
      this.dy *= -1;
    } else if (this.ypos + this.radius > canvas_height) {
      this.dy *= -1;
    }

    this.draw(context);
  }
}

let all_circles = [];

let randomNumber = function (max, min) {
  let result = Math.random() * (max - min) + min;
  return result;
};

for (let i = 0; i < 10; i++) {
  let radius = 50;
  let random_x = randomNumber(canvas_width - radius, radius);
  let random_y = randomNumber(canvas_height - radius, radius);

  let my_circle = new Circle(random_x, random_y, radius, "black", i + 1, 2);
  all_circles.push(my_circle);
  my_circle.draw(ctx);
}

let updateCircle = function () {
  requestAnimationFrame(updateCircle);
  ctx.clearRect(0, 0, canvas_width, canvas_height);
  all_circles.forEach((circle) => {
    circle.update(ctx);
  });
};

updateCircle();
