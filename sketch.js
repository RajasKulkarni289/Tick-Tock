var hr,min,sec,secAngle;

function setup() {
  createCanvas(800,400);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  background("black");
  translate(200,200);
  rotate(-90);
  hr=hour();
  min=minute();
  sec=second();
  
  secAngle=map(sec,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);
  minAngle=map(min,0,0.0166,0,360);
  push();
  rotate(secAngle);
  strokeWeight(10);
  stroke(255,0,0);
  line(0,0,100,0);
  pop();
  push();
  rotate(hrAngle);
  strokeWeight(10);
  stroke("blue");
  line(0,0,100,0);
  pop();
  push();
  rotate(minAngle);
  strokeWeight(10);
  stroke("green");
  line(0,0,100,0);
  pop();
  point(0,0);
  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,secAngle);
  stroke("blue");
  arc(0,0,260,260,0,hrAngle);
  stroke("green");
  arc(0,0,340,340,0,minAngle);
 
}