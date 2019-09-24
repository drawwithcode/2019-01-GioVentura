var points = Array();

function preload(){
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(60);
}

function mousePressed() {
  if(width/2 - 200 < mouseX && mouseX < width/2 + 200) {
    var pointCoord = Array(mouseX, mouseY);
    points.push(pointCoord);
  }

}

function draw() {

background(0) // just one radar scan line

  // texts
  push()
translate(width/2,height/2);
  noFill();
 stroke(250);
 strokeWeight(1.3);
  textSize(30);
  textAlign(CENTER);
  text("Click on the radar to find enemies.", 0,-310);
  text("Press 's' to save your pic.", 0,-280);
 pop()

   //radar design.

  push();
  strokeWeight(2);
  translate(width/2,height/2);
  noFill();
  stroke(lerpColor(color('rgba(1, 255, 2, 0)'), color('rgba(1, 255, 2, 1)'),frameCount/120));
  ellipse(0,0,400);
  line(200,0,cos(frameCount*3)*200,sin(frameCount*3)*200);
  stroke(lerpColor(color('rgba(1, 255, 2, 0)'), color('rgba(1, 255, 2, 0.5)'),frameCount/120));
  line(-200,0,200,0);
  line(0,-200,0,200);
  stroke(lerpColor(color('rgba(1, 255, 2, 0)'), color('rgba(1, 255, 2, 0.3)'),frameCount/120));
  ellipse(0,0,300);
  ellipse(0,0,200);
  ellipse(0,0,100);
  pop();

    //Blips
  for (i=0;i< points.length;i++){
     fill("#ff452c");
     ellipse(points[i][0], points[i][1], 10);
     //Coordinates
      text(points[i][0] + "x" + points[i][1], points[i][0] + 10, points[i][1] + 10)
   }

}
  // save pic function
function keyTyped(){
  if (key == 's' || key == 'S') save('radar.jpg')
}
