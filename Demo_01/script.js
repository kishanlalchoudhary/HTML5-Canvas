const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// canvas.width = 200;
// canvas.width = window.innerWidth;

// fillRect()
ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150, 150);
ctx.fillStyle = "green";
ctx.fillRect(220, 20, 150, 150);
ctx.fillStyle = "blue";
ctx.fillRect(420, 20, 150, 150);

// strokeRect()
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.strokeRect(20, 200, 150, 150);

// clearRect()
ctx.clearRect(25, 25, 140, 90);

// fillText()
ctx.font = "30px Arial";
ctx.fillStyle = "purple";
ctx.fillText("Hello World", 220, 280);

// strokeText()
ctx.lineWidth = 1;
ctx.strokeStyle = "brown";
ctx.strokeText("Hello World", 420, 280);

// Paths
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(50, 425);
ctx.lineTo(150, 425);
ctx.lineTo(100, 550);
// ctx.lineTo(52, 450);
ctx.closePath();
// ctx.stroke();
ctx.fillStyle = "orange";
ctx.fill();

ctx.beginPath();
ctx.moveTo(175, 425);
ctx.lineTo(225, 550);
ctx.lineTo(125, 550);
ctx.closePath();
ctx.fillStyle = "orange";
ctx.fill();

// Rectangle
ctx.beginPath();
ctx.rect(225, 350, 150, 100);
ctx.fillStyle = "teal";
ctx.fill();

// Arc (circles)
ctx.beginPath();

ctx.lineWidth = 2;
ctx.strokeStyle = "red";

const centerX = 500;
const centerY = 400;

// Head
ctx.arc(centerX, centerY, 60, 0, Math.PI * 2);

// Move to mouth
ctx.moveTo(centerX + 35, centerY);

// Mouth
ctx.arc(centerX, centerY, 35, 0, Math.PI);

// Move to left eye
ctx.moveTo(centerX - 10, centerY - 20);

// Left Eye
ctx.arc(centerX - 20, centerY - 20, 10, 0, Math.PI * 2);

// Move to right eye
ctx.moveTo(centerX + 30, centerY - 20);

// Right Eye
ctx.arc(centerX + 20, centerY - 20, 10, 0, Math.PI * 2);

ctx.stroke();
