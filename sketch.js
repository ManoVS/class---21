var fixedRect, movingRect,box1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1 = createSprite(400, 100, 50, 80);
  box1.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

bounceOff(fixedRect,movingRect);

box1.x = mouseX;
box1.y = mouseY;

bounceOff(box1,fixedRect);

if(isTouching(box1,movingRect)){
  movingRect.shapeColor = "red";
  box1.shapeColor = "red"
}
else{
  movingRect.shapeColor = "green";
  box1.shapeColor = "green";
}

  drawSprites();
}

