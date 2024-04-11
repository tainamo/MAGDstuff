var petal1,petal2,petal3,amount = [];//petal array
var bugAmount = 200//Amount of bugs, so many bugs in spring

function setup() {
  createCanvas(400, 400);
  petal1 = [160,175,170,150,180,175];
  petal2 = [180,175,200,150,220,175];
  petal3 = [220,175,230,150,240,175];
  //establishing our petals
  for (let i = 0; i < bugAmount; i++) {
    amount.push(new SpringBugs());
  }
}

function draw() {
  background(220);
  rectMode(CENTER);
  fill(0,255,0);
  rect(200,400,10,400,255);
  fill(255,0,0);
  arc(200, 175, 80, 80, 0, PI, OPEN);
  triangle(petal1[0],petal1[1],petal1[2],petal1[3],petal1[4],petal1[5]);
  triangle(petal2[0],petal2[1],petal2[2],petal2[3],petal2[4],petal2[5]);
  triangle(petal3[0],petal3[1],petal3[2],petal3[3],petal3[4],petal3[5]);
  //a beautiful tulip
  for (let i = 0; i < amount.length; i++) {
    amount[i].move();
    amount[i].display();
  }
}

class SpringBugs {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(2, 4);
    this.speed = 0.5;
    this.c = color(random(255));
    //size, movement speed, and color of bugs, randomized for your pleasure
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    //vibrating buzzing buggies
  }

  display() {
    fill(this.c);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    //the bugs
  }
}
