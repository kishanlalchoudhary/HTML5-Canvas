const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Drawing random circles by Creating Circle class and its objects

const canvas_height = 600;
const canvas_width = 600;

canvas.style.background = "#ffa";

class Circle {
  constructor(xpos, ypos, radius, color) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
  }

  draw(context) {
    context.beginPath();
    context.lineWidth = 3;
    context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();
  }
}

let all_circles = [];

let createCircle = function (circle) {
  circle.draw(ctx);
};

for (let numbers = 0; numbers < 10; numbers++) {
  let random_x = Math.random() * canvas_width;
  let random_y = Math.random() * canvas_height;
  let my_circle = new Circle(random_x, random_y, 50, "black");
  all_circles.push(my_circle);
  createCircle(all_circles[numbers]);
}
