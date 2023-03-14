var sea;
var seaImg;
var ship;
var shipImg;
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200);
  sea.addImage(seaImg);
  sea.scale = 0.5;
  sea.velocityX = -2;
  ship = createSprite(200,200);
  ship.addAnimation("running",shipImg);
  ship.scale = 0.3;
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x = sea.width/8;
  }
    drawSprites();

 
}
