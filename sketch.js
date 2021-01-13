var mario,marioR,marioC;
var obstacle,obstacleI,bricik,brickW;
var restart,restartI,go,goI,bg,g,gI;
var ground;
var edges;
function preload(){
marioR=loadAnimation("mario00.png","mario01.png","mario02.png","mario03.png")
obstacleI=loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png")
brickW=loadImage("brick.png")
marioC=loadImage("collided.png")
restart=loadImage("restart.png")
bg=loadImage("bg.png")
goI=loadImage("gameOver.png")
}

function setup(){
createCanvas(windowWidth,windowHeight);
mario=createSprite(50,height-140, 20,20);
mario.addAnimation("Animation of mario", marioR);
ground=createSprite(width/2,height-140,width,10);
ground.velocityX= -10;
ground.visible=false;
edges= createEdgeSprites();
}

function draw(){
background(bg);
mario.collide(ground)
if(ground.x<0){
    ground.x=ground.width/2
}
//console.log(mario.y)

if(keyDown("space") && mario.y>780){
mario.velocityY=-10;
}

mario.velocityY=mario.velocityY+0.5;
spawnBricks();
drawSprites();
}


function spawnBricks(){
    if(frameCount%60===0){
    var brick=createSprite(width,805,10,10);
    brick.addImage(brickW);
    brick.velocityX=-10;
}
}