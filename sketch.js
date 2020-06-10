var slingshot
var ball,ball1
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  slingshot = new Slingshot(x:200 , y:100))
  ball = new enemy
  ball1 = new enemy
  rectMode = CENTER
}

function draw() {
  background(255,255,255);  
  if (keyDown("SPACE")){
    slingshot.attach(ball)
    ball.bounceOff(slingshot)
    ball1.bounceOff(slingshot)
  }
  World.add= (world,this.ball)
    World.add= (world,this.ball1)
      World.add= (world,this.slingshot)
  drawSprites();
}