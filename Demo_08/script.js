const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Collision detection Canvas objects and elements interaction

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

let getDistance = function (xpos1, ypos1, xpos2, ypos2) {
  let result = Math.sqrt(
    Math.pow(xpos1 - xpos2, 2) + Math.pow(ypos1 - ypos2, 2)
  );
  return result;
};

let createCircle = function (circle) {
  circle.draw(ctx);
};

let my_circle1 = new Circle(250, 150, 50, "black", "A", 2);
my_circle1.draw(ctx);

let my_circle2 = new Circle(300, 250, 175, "black", "B", 0);
my_circle2.draw(ctx);

let updateCircle = function () {
  requestAnimationFrame(updateCircle);
  ctx.clearRect(0, 0, canvas_width, canvas_height);
  my_circle1.update(ctx);
  my_circle2.update(ctx);
  if (
    my_circle1.radius + my_circle2.radius >=
    getDistance(
      my_circle1.xpos,
      my_circle1.ypos,
      my_circle2.xpos,
      my_circle2.ypos
    )
  ) {
    my_circle2.color = "red";
  } else {
    my_circle2.color = "green";
  }
};

updateCircle();
