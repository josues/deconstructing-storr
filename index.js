var rows;
var columns;

var xStep;
var yStep;

var heightoff;
var widthoff;

var positions = [];

function setup(){
  createCanvas(500, 500);
  background(252);

  rows = 15;
  //columns = 10;

  heightoff = (height - 30);
  widthoff = (width - 30)

  xStep = widthoff/columns;
  yStep = heightoff/rows;

  for(var x = 30; x < widthoff; x += xStep){
  for(var y = 30; y < heightoff; y += yStep){
    var p = createVector(x, y);
    positions.push(p);
    xStep = Math.abs(randomGaussian(20, 22)) | 20;
    yStep = Math.abs(randomGaussian(10, 10)) | 50;
  }
  }

  var size = 15;
  fill(220);
  strokeWeight(1);
  for(var i = 0; i < positions.length; i++){
    ellipse(positions[i].x, positions[i].y, size, size);
    fill(Math.abs(randomGaussian(200, 220)) | 100);
    size = Math.abs(randomGaussian(2, 2)) | 12;
    strokeWeight(random(0,0.5));
  }
 }

function draw(){
}

function mousePressed(){
  save('image.jpg');
}
