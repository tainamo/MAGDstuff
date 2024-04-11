var x=0;
var tri1x=80;
var tri1y=80;
var tri2x=80;
var tri2y=130;
var tri3x=110;
var tri3y=110;

let pepperonix=[];
let pepperoniy=[];
let pepperx=[];
let peppery=[];

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(x);
  fill(255,255,0);
  ellipse(300,300,500);
  line(125,125,475,475);
  line(475,125,125,475);
  line(300,50,300,550);
  line(50,300,550,300);
  
  if (mouseIsPressed === true) {
    if (mouseButton === LEFT) {
      pepperonix.push(mouseX);
      pepperoniy.push(mouseY);
    }
    else if (mouseButton === CENTER) {
      pepperx.push(mouseX);
      peppery.push(mouseY);
    }
  }
  for(let i=0; i<50;i++){
    fill(255,0,0);
    ellipse (pepperonix[i],pepperoniy[i],50,50);
  }
  for(let i=0; i<50;i++){
    fill(0,255,0);
    ellipse (pepperx[i],peppery[i],75,25);
  }
  
  fill(0,0,255);
  triangle(tri1x,tri1y,tri2x,tri2y,tri3x,tri3y);
  for(let i=0; i<2;i++){
    tri1x++;
    tri1y++;
    tri2x++;
    tri2y++;
    tri3x++;
    tri3y++;
  }
}

function mousePressed(){
  if (x === 0) {
    x = 255;
  } else {
    x = 0;
  }
}

function keyPressed(){
  if (x === 0) {
    x = 125;
  } else {
    x = 0;
  }
}