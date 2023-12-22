const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Moving objects animation and Collision detection

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

    this.dx = 1 * this.speed;
    this.dy = 1 * this.speed;
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
    context.clearRect(0, 0, canvas_width, canvas_height);
    this.xpos += this.dx;
    this.ypos += this.dy;

    if (this.xpos - this.radius < 0) {
      this.dx *= -1;
      this.text++;
    } else if (this.xpos + this.radius > canvas_width) {
      this.dx *= -1;
      this.text++;
    } else if (this.ypos - this.radius < 0) {
      this.dy *= -1;
      this.text++;
    } else if (this.ypos + this.radius > canvas_height) {
      this.dy *= -1;
      this.text++;
    }

    this.draw(context);
  }
}

let createCircle = function (circle) {
  circle.draw(ctx);
};

let my_circle = new Circle(100, 200, 50, "black", 0, 2);
my_circle.draw(ctx);

let updateCircle = function () {
  requestAnimationFrame(updateCircle);
  my_circle.update(ctx);
};

updateCircle();
