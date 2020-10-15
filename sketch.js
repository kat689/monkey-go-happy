
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime
function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  // createCanvas(600, 600);
  


   survivalTime=0;
  
  //creating monkey
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
  // monkey.addImage(bananaImage)
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
 

  FoodGroup = new Group();
  obstaclesGroup = new Group();

  
 
  
}


function draw() {
  
  background(200,250,0);
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  
   
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    spawnFood();
    spawnObstacles();
 
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  
    if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  ground.velocityX = -(4 + 3* survivalTime/100)
    //scoring
    survivalTime = survivalTime + Math.round(frameCount/100);
  text("Survival Time: "+ survivalTime, 100,50);
}



function spawnFood() {
  //write code here to spawn the Food
 if(frameCount%60===0){
   banana=createSprite(600,250,40,10)
   banana.velocityX=-5;
   banana.y=random(100,200)
   banana.lifetime=300;
   monkey.depth=banana.depth+1;
   banana.addImage(bananaImage)
   banana.scale=0.1
   FoodGroup.add(banana)
   
 }
}

function spawnObstacles() {
 if (frameCount%60===0){
   obstacle=createSprite(600,330,40,10)
   obstacle.velocityX=-6;
   obstacle.lifetime=300;
   obstacle.addImage(obstacleImage)
   obstacle.scale=0.1
 }
  }
 
   
 
  

