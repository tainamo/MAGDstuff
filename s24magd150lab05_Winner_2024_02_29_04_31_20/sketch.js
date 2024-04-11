var rectangleX = 125;
var rectangleY = 150;
var rectangleW = 150;
var rectangleH = 100;

var circleX = 100;
var circleY = 100;
var circleR = 65;

var circleOver = false;
var currentColor;
var baseColor;
var circleColor;

var lineY;

function setup() {
  createCanvas(400, 400);
  circleColor = color(100);
  baseColor = color(202);
  currentColor = baseColor;
  lineY = height / 2;
}

function draw() {
  update(mouseX, mouseY);
  background(currentColor);
  
  rect(rectangleX,rectangleY,rectangleW,rectangleH);
  
  if (circleOver) {
    fill(color(255));
  } else {
    fill(circleColor);
  }
  
  ellipse(circleX, circleY, circleR, circleR);
  line(0, lineY, width, lineY);
  lineY -=0.5;
  if (lineY < 0) {
    lineY = height;
  }
  
  push();
    fill(0);
    var boxText = "DON'T PRESS!";
    var circleText = "PRESS!";
    text(boxText, 155, 200);
    text(circleText, 80, 100);
  pop();
  
  if(mouseX>rectangleX && mouseX<rectangleX+rectangleW && mouseY>rectangleY && mouseY <rectangleY+rectangleH){
    fill(200);
    } else if(sqrt(sq(circleX-mouseX) + sq(circleY-mouseY)) < circleR/2) {
      fill(100);
    } else {
      fill(255);
    }

}

function update( x,  y) {
  if ( overCircle(circleX, circleY, circleR) ) {
    circleOver = true;
  }  else {
    circleOver = false;
  }
}

function mousePressed() {
  if (circleOver) {
    currentColor = circleColor;
  }
}

function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}