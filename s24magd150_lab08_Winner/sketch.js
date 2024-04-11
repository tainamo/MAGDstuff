let screamText = [];
var pdf;
//establishing variables, wasn't able to figure out how to make the pdf thingie work though.
function preload(){
  font1=loadFont("/assets/Movie.ttf");
  font2=loadFont("/assets/Transformers.ttf");
  scream=loadStrings("/assets/aA.txt");
  img1=loadImage("/assets/desert.jpg");
  img2=loadImage("/assets/tai2.png");
  //loading fonts, loading a string from a text file, and loading images from the assets folder.
}
function setup() {
  createCanvas(500,500);
  //pdf = createPDF();
  //pdf.beginRecord();
  background(200);
  textFont(font1);
  textSize(48);
  textAlign(CENTER);
  for(let i = 0; i < 1; i++){
    screamText.push(new Shake());
  }
  img1.filter(POSTERIZE, 7);
  tint('pink');
  image(img2, 0, 255);
  //adding some filter and tint. My favorite color is pink, whats yours?
}
function draw(){
  image(img1,0,0,width,height);
  image(img2,210,375,width/6,height/6);
  
  push();
  textFont(font2);
  text("GUNE", width/2, 55);
  pop();
  
  for (let i = 0; i < screamText.length; i++) {
    screamText[i].move();
    screamText[i].display();
  }
}

class Shake {//shake shake shake, to really emphasize the scream text.
    constructor() {
      this.x = width/2
      this.y = 150
      this.speed = 1;
    }
  
    move() {
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
    }
    display() {
      text(scream, this.x, this.y)
    }
}

//function mousePressed(){
         // pdf.save();
  
//}
