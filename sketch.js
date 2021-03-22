var player, playerImg
var ground, groundImg
var score
var go
var r
var trap
function preload(){
 playerImg =  loadAnimation("C1.png","C2.png", "C3.png")
 groundImg = loadImage("desert_BG.png")
 trapImage = loadImage("trap.png")
 trap2Image = loadImage("lava trap.png")
}
function setup() {
  createCanvas(1200, 650);
  ground = createSprite(800 ,300, 1800, 1200)
  ground.velocityX = -3
  ground.addImage(groundImg)
  ground.scale = 2
  player = createSprite(200,500, 50, 50)
  player.addAnimation("running", playerImg)
  iground = createSprite(800 ,590, 1800, 50)
  iground.visible = false
  createEdgeSprites()
  score = 0
  go = createSprite(600, 275)
  r = createSprite(600, 400)

}

function draw() {
  background(groundImg);
  score = score + Math.round(getFrameRate()/60)
  if(ground.x < 400){
    ground.x = 800
  }
  if(iground.x < 400){
    iground.x = 800
  }
  if(keyDown("space")){
    player.velocityY = -9
  }
  if(keyDown("UP_ARROW")&&player.y >= 484){
    player.velocityY = -9
  }
  console.log(player.y)

  player.velocityY = player.velocityY+0.8
  if (player.y < 350){
    player.velocityY = +9
  }
spawnTraps()
  player.collide(iground)
  drawSprites()
  text("score"+ score, 1100, 50)

}
function spawnTraps(){
  if(frameCount% 150 === 0 ){
  trap = createSprite(1000,500, 50,50)
   trap.velocityX = -5
   
   var rand = Math.round(random(1,6))
   switch(rand){
   case 1:trap.addImage(trapImage)
          break;
   case 6:trap.addImage(trap2Image)
          break;    
   default:break;
  }
}
}