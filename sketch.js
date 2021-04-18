const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var player
var obstaclesGroup, obstacle1, obstacle2, obstacle3
var laserBaseGroups, laserBase1, laserBase2, laserBase3
var laserGroups, laser1, laser2, laser3
var guardsGroup, guard1, guard2, guard3
var silverButton
var startingPlace
var endingPlace


function preload() {
  background = loadImage("./images/marble bg.jpg");
  button = loadImage("./images/silver button.png");
  player = loadImage("./images/playerstar.png");
}

function setup() {
  createCanvas(300,400);
  engine=Engine.create();
  world = engine.world;
  player = new Player(40, 25, 50, 50);
  startingPlace = new Start(0, 400, 80, 50);
  endingPlace = new EndingPlace(40, 30, 80, 60);
  obstacle1 = new Obstacle(280, 20, 90, 10);
  obstacle2 = new Obstacle(300, 50, 50, 10, 45);
  obstacle3 = new Obstacle(370, 140, 10, 70);
  laserBase1 = new LaserBase(95, 70, 40, 40);
}

function draw() {  
  
  drawSprites();

  //moving
  if(keyIsDown(RIGHT_ARROW)){
    player.velocityX = +2;
  }

  if(keyIsDown(LEFT_ARROW)){
    player.velocityX = -2;
  }

  if(keyIsDown(UP_ARROW)){
    player.velocityY = +2;
  }

  if(keyIsDown(DOWN_ARROW)){
    player.velocityY = -2;
  }

  //stopping
  if(keyWentUp(RIGHT_ARROW)){
    player.velocityY = 0;
  }
  
  if(keyWentUp(LEFT_ARROW)){
    player.velocityY = 0;
  }
  
  if(keyWentUp(UP_ARROW)){
    player.velocityY = 0;
  }
  
  if(keyWentUp(DOWN_ARROW)){
    player.velocityY = 0;
  }

  //ending the game
  if(player.isTouching(silverButton)){
    goodEnd();
  }

}

function end(){
  background= ('#ea3131');
  text("GAME OVER");
  text.position(150, 150);
  this.text=createElement('h1')
  var reset = createButton("RESET");
  reset.position(150, 200);
}

function goodEnd(){
  background = ('#10c950');
  text("GAME COMPLETE!");
  text.position(150, 150);
  this.text=createElement('h1')
  var reset = createButton("RESET");
}