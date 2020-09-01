
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Paper1 = new Paper(200,600,1,1);
	DustBin1 = new DustBin(700,600,20,50);
	ground1 = new Ground(0,780,10,100);

	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  Paper1.display();
  DustBin1.display();
  ground1.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(KeyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

