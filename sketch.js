
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground,groundImage;

var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  groundImage=loadImage("ground2.png");
 
}



function setup() {
  
  createCanvas(400,400);
  
  
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  //creating ground 
  ground=createSprite(400,320,900,10);
  ground.shapeColor="brown";
  ground.addImage(groundImage);
  ground.x=0;
 

 
   

  
}


function draw() {
  background("white");
   
  ground.velocityX=-4;
  monkey.collide(ground);
  var survivalTime=0;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival time:"+survivalTime,100,50);
  
   if(ground.x<0){
    ground.x=400;
     
  }
  
  
  
  if(keyDown("space")&&monkey.y>=159){
    monkey.velocityY=-12;
   
  }
    monkey.velocityY=monkey.velocityY+0.8; 
  
  
  
   spawnBanana();
  
  spawnObstacle();
  
  
 
   drawSprites();
  
  
}




function spawnBanana(){
  
  if(frameCount%80===0){
    
    var r;
    r=Math.round(random(120,200));
    banana=createSprite(400,r,10 ,10);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=100;
    
    banana.add=FoodGroup;
    
  } 
  
}

function spawnObstacle(){
  
  if(frameCount%300===0){
    
    var s;
    s=Math.round(random(120,200));
    obstacle=createSprite(400,315,10 ,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-4;
    obstacle.lifetime=100;
    
    obstacle.add=obstacleGroup;
    
  } 
  
}


