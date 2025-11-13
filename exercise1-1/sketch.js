let circleX = 20;
let circleY = 20;
let circleW = 40;
let g, b;

function setup() {
  frameRate(60);           
  createCanvas(600, 400);
  noStroke();
  background(0);
  g = random(10, 255);
  b = random(255);
  background(0);
}

function draw() {
  fill(0, g, b);
  circle(circleX, circleY, circleW);

  
  circleX += circleW;

  
  if (circleX > width - circleW / 2) {
    circleX = circleW / 2;
    circleY += circleW;
  }

  
  if (circleY > height - circleW / 2) {
    circleX = circleW / 2;
    circleY = circleW / 2;
    g = random(10, 255);
    b = random(255);
  }

 
  b = (b + 2) % 255;
}
