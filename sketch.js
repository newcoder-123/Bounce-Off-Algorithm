var movingR

var fixedR

var rect1

function setup() {
  createCanvas(800,400);
  movingR  = createSprite(400, 300, 50, 50);
  movingR.velocityY = -2
  movingR.shapeColor = "blue"

  fixedR  = createSprite(500, 300, 50, 50);
  fixedR.shapeColor = "blue"

  rect1 = createSprite(400,50,50,50)
  rect1.velocityY = 2
  rect1.shapeColor = "yellow"
}

function draw() {
  background("black"); 
  
  /*movingR.x = World.mouseX
  movingR.y = World.mouseY*/
  /*if(isTouching(rect1,movingR)){
    fill ("pink")
      text ("Objects are Touching",400,200)
      rect1.shapeColor = "red"
      movingR.shapeColor = "red"
  }
  else{
    fill ("green")
    text ("Objects are Apart",400,200)
    rect1.shapeColor = "yellow"
    movingR.shapeColor = "blue"
  }*/
  bounceoff(rect1,movingR)



  drawSprites();
}

