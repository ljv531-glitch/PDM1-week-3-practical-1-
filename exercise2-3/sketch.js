let rectX = 200;
let rectY = 200;
let rectW = 150;
let rectH = 100;
let dragging = false;
let offsetX, offsetY;

function setup() {
  createCanvas(600, 600);
  rectMode(CORNER);
}

function draw() {
  background(0); 

  
  if (dragging) {
    fill(0, 150, 255); 
  } else {
    fill(255); 
  }

  rect(rectX, rectY, rectW, rectH);
}

function mousePressed() {

  if (
    mouseX > rectX &&
    mouseX < rectX + rectW &&
    mouseY > rectY &&
    mouseY < rectY + rectH
  ) {
    dragging = true;
    offsetX = mouseX - rectX;
    offsetY = mouseY - rectY;
  }
}

function mouseDragged() {
  if (dragging) {
    rectX = mouseX - offsetX;
    rectY = mouseY - offsetY;
  }
}

function mouseReleased() {
 
  dragging = false;
}
