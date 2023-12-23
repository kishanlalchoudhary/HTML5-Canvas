const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Canvas Images and Icons

const canvas_height = 600;
const canvas_width = 600;

canvas.style.background = "#ffa";

class Image {
  constructor(imagePath, xpos, ypos, width, height) {
    this.imagePath = imagePath;
    this.xpos = xpos;
    this.ypos = ypos;
    this.width = width;
    this.height = height;
  }
}

function createImage(context, imagePath, xpos, ypos, width, height) {
  let myImage = document.createElement("img");
  myImage.src = imagePath;
  myImage.onload = function () {
    context.drawImage(myImage, xpos, ypos, width, height);
  };
}

let image = new Image("item.png", 50, 50, 500, 500);
createImage(
  ctx,
  image.imagePath,
  image.xpos,
  image.ypos,
  image.width,
  image.height
);
