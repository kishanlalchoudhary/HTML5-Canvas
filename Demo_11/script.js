const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Canvas Drag and Drop Objects

const canvas_height = 600;
const canvas_width = 600;
// let offset_x;
// let offset_y;

canvas.style.background = "#ffa";

// let get_offset = function () {
//   let canvas_offsets = canvas.getBoundingClientRect();
//   offset_x = canvas_offsets.left;
//   offset_y = canvas_offsets.top;
// };

// get_offset();
// window.onscroll = function () {
//   get_offset();
// };
// window.onresize = function () {
//   get_offset();
// };
// canvas.onresize = function () {
//   get_offset();
// };

let shapes = [];
let current_shape_index;
let is_dragging = false;
let startX;
let startY;
shapes.push({ x: 250, y: 250, width: 200, height: 200, color: "blue" });
shapes.push({ x: 100, y: 100, width: 100, height: 100, color: "red" });

let is_mouse_in_shape = function (x, y, shape) {
  let shape_left = shape.x;
  let shape_right = shape.x + shape.width;
  let shape_top = shape.y;
  let shape_bottom = shape.y + shape.height;

  if (x > shape_left && x < shape_right && y > shape_top && y < shape_bottom) {
    return true;
  }

  return false;
};

let mouse_down = function (e) {
  e.preventDefault();

  // startX = e.clientX - offset_x;
  startX = e.offsetX;
  // startY = e.clientY - offset_y;
  startY = e.offsetY;

  let index = 0;
  for (let shape of shapes) {
    if (is_mouse_in_shape(startX, startY, shape)) {
      current_shape_index = index;
      is_dragging = true;
    }
    index++;
  }
};

let mouse_up = function (e) {
  if (!is_dragging) {
    return;
  }

  e.preventDefault();
  is_dragging = false;
};

let mouse_out = function (e) {
  if (!is_dragging) {
    return;
  }

  e.preventDefault();
  is_dragging = false;
};

let mouse_move = function (e) {
  if (!is_dragging) {
    return;
  }

  e.preventDefault();
  // let mouseX = e.clientX - offset_x;
  let mouseX = e.offsetX;
  // let mouseY = e.clientY - offset_y;
  let mouseY = e.offsetY;

  let dx = mouseX - startX;
  let dy = mouseY - startY;

  let current_shape = shapes[current_shape_index];
  current_shape.x += dx;
  current_shape.y += dy;

  draw_shapes();

  startX = mouseX;
  startY = mouseY;
};

canvas.onmousedown = mouse_down;
canvas.onmousemove = mouse_move;
canvas.onmouseup = mouse_up;
canvas.onmouseout = mouse_out;

let draw_shapes = function () {
  ctx.clearRect(0, 0, canvas_width, canvas_height);
  for (let shape of shapes) {
    ctx.fillStyle = shape.color;
    ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
  }
};

draw_shapes();
