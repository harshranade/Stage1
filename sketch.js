var backgroundimg, obstacle1img, obstacle2img, spaceshipimg, bg, spaceship;
function preload()
{
  backgroundimg = loadImage("images/background.png")
  obstacle1img = loadImage("images/obstacle1.png")
  obstacle2img = loadImage("images/obstacle2.png")
  spaceshipimg = loadImage("images/spaceship.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  //backround sprite
  bg = createSprite(width/2,height/2,2000,height)
  bg.addImage(backgroundimg)
  bg.scale = 2;
  bg.velocityY = 5;
  //spaceship sprite
  spaceship = createSprite(750,640)
  spaceship.addImage(spaceshipimg)
  spaceship.scale = 0.2;
}

function draw() {
  background("black");
 /* This was for cheking the pos */

  //fill("red")
  //textSize(20)
  //text(mouseX+":"+mouseY,mouseX,mouseY)

  // To move spaceship
  if(keyDown(LEFT_ARROW))
  {
    spaceship.x = spaceship.x - 10;
  }
  
  if(keyDown(RIGHT_ARROW))
  {
    spaceship.x = spaceship.x + 10;
  }

  if(keyDown(UP_ARROW))
  {
    spaceship.y = spaceship.y - 10;
  }

  if(keyDown(DOWN_ARROW))
  {
    spaceship.y = spaceship.y + 10;
  }

 //backround reset
 if(bg.y>400)
 {
   bg.y = height/8;
 }




  drawSprites();
}

 


