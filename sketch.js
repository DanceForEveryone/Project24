
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball= new Ball(100,670,30)
	dustbin= new Dustbin(600,680)
	ground= new Ground(400,690,800,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ball.display();
 dustbin.display();
 ground.display();
}

function keyPressed() {
	 if (keyCode === UP_ARROW) { 
	Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-70});
 }
 }

