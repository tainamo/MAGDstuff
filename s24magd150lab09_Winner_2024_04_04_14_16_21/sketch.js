let Pipe;
let Mirror;
let Compliment;
let Button;

function preload(){
  soundFormats('mp3');
  Pipe=loadSound('metalpipe.mp3');
}

function setup() {
  Pipe.setVolume(0.5);
  Pipe.pan(0);
  Pipe.rate(0.69);
  Pipe.play();
  createCanvas(320,240);
  Mirror=createCapture(VIDEO);
  Mirror.size(320,240);
  Mirror.hide();
  Compliment=createElement('h2','You look beautiful today!')
  Button=createButton('I agree!')
}

function draw() {
  background(220);
  image(Mirror,0,0,320,240);
  filter(POSTERIZE);
}
