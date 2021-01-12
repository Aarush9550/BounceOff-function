var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);


  movingRect.velocityX=-5;
  fixedRect.velocityX = 5;


}

function draw() {
  background(255,255,255);  
 // movingRect.x=World.mouseX;
 // movingRect.y=World.mouseY;

  bounceOff(movingRect, fixedRect);
  drawSprites();
}

//Function parameters


function bounceOff(object1,object2) {
if(object1.x-object2.x<object2.width/2+object1.width/2 && 
  object2.x-object1.x<object2.width/2+object1.width/2 )
  {
    
    object1.velocityX=  object1.velocityX * (-1);
    object2.velocityX =  object2.velocityX *(-1);

  }
}

