//global variable decleration
var trex,ground
var trex_running,groundImg
var invisibleGround
var x;
var cloud,cloudImg

//loading image / animation / sound
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImg=loadImage("ground2.png")
  cloudImg=loadImage("cloud.png")
}


// creating canvas, objects, setting any property for 1time
function setup(){
  //creating canvas
  createCanvas(600,200);

  //creating trex object
  trex=createSprite(50,160,20,30)
  //adding the animation to trex
  trex.addAnimation("running",trex_running)
  //reducing the size of trex animation
  trex.scale=0.5;

  // creating ground object
  ground=createSprite(300,180,600,10)
  //adding the image to ground
  ground.addImage(groundImg)
  //Giving velocity X to ground
  ground.velocityX=-4;

  //creating a invisible ground 
  invisibleGround=createSprite(300,185,600,5)
  //making the 2nd ground invisible
  invisibleGround.visible=false;

  
  
}


//To display object and to repeatedly execute any command or set of commands
function draw(){
  //To clear the background and giving colour to it
  background(180)
  
  //reseting the ground
  if(ground.x<0){
    ground.x=ground.width/2
  }

  //To make the trex jump with the press of space key
  if(keyDown("space")&& trex.y>=150){
    trex.velocityY=-12
  }

  //adding gravity effect
  trex.velocityY+=0.9
  //displaying trex's y position in console
  //console.log(trex.y)

  // not letting the trex fall off the ground
  trex.collide(invisibleGround)

  spawnClouds()

  //generating random number
  /*x = Math.round(random(10,100))
  console.log(x)*/

  //to draw the sprite objects on the canvas
  drawSprites()
}

function spawnClouds(){
  if(frameCount%60===0){
    cloud =createSprite(600,50,20,5)
    cloud.y= Math.round(random(20,100))
    cloud.addImage(cloudImg)
    cloud.scale=0.6
    cloud.velocityX=-3
    cloud.depth=trex.depth
    trex.depth=trex.depth+1
  }
 
}
