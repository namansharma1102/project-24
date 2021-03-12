
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
var side1;
var side2;
var side3;

function preload()
{
	
}

function setup() {
	createCanvas(1530, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new Paper(60,60,10)
	ground1 = new Ground(800,690,1600,10)

	side1 = new Side(1350,675,200,20)

	side2 = new Side(1450,635,20,100)

	side3 = new Side(1250,635,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  Engine.update(engine)

  background(0);
  
  paper1.display();
  ground1.display()
  side1.display()
  side2.display()
  side3.display()
  
//keyPressed();

  drawSprites();
 
}



