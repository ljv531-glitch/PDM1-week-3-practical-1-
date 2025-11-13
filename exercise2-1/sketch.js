let fillColour;
let x1, y1, x2, y2, x3, y3; 
let moveStep = 5; 

function setup() {
  createCanvas(600, 600);
  noStroke();

  
  fillColour = color(random(255), random(255), random(255));

  
  let margin = 50;
  x1 = width / 2;           
  y1 = margin;
  x2 = margin;              
  y2 = height - margin;
  x3 = width - margin;      
  y3 = height - margin;
}

function draw() {
  background(240); 

  fill(fillColour);
  triangle(x1, y1, x2, y2, x3, y3);
}


function keyPressed() {
  if (keyCode === UP_ARROW || key === 'w' || key === 'W') {
    y1 -= moveStep;
    y2 -= moveStep;
    y3 -= moveStep;
  }

  else if (keyCode === DOWN_ARROW || key === 's' || key === 'S') {
    y1 += moveStep;
    y2 += moveStep;
    y3 += moveStep;
  }

  else if (keyCode === LEFT_ARROW || key === 'a' || key === 'A') {
    x1 -= moveStep;
    x2 -= moveStep;
    x3 -= moveStep;
  }

  else if (keyCode === RIGHT_ARROW || key === 'd' || key === 'D') {
    x1 += moveStep;
    x2 += moveStep;
    x3 += moveStep;
  }
}
