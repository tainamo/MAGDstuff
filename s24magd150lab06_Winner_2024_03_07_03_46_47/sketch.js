var rx, ry
var theta = 0;

function setup() {
  createCanvas(600, 300);
  rx=0;
  rxSpeed=3;
}

function draw() {
  background(0);
  
  function centerLine(){
    //Its a line. In the center!
    push();
    stroke(0);
    fill(125);
    rect(295, 0, 10, 300);
    pop();
  }
  
  function speen(){
    //A red line thats rotating around...something.
    push();
    rotate(theta);
    translate(30,0);
    stroke(0);
    fill(125,0,0);
    rect(300, 150, 10, 30);
    pop();
  }
    
  function ball(x){
    //The ball moves and bounces.
    push();
    stroke(0);
    fill(230);
    scale(x);
    rect (rx+10,145,10,10);
    rx+= rxSpeed;
  
    if (rx<=0 || rx+30 >= width){
      rxSpeed *= -1;
    }
  }
  
  function paddle(x, y){
    //The ball has gotta bounce on something.
    push();
    stroke(0);
    fill(230);
    rect(x, y, 10, 100);
    pop();
  }
  
  centerLine();
  speen();
  paddle(0, 100);
  paddle(590, 100);
  ball(1);
  
  theta += 0.01;
}