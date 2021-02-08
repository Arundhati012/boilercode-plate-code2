
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper1,paper2,paper3,paper4,dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

paper1 = new paper(810,350);
paper2 = new paper(830,310);
paper3 = new paper(700,330);
paper4 = new paper(860,320);
dustbin1 = new dustbin1(9000,550);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(paper1.body,position.x);
  console.log(paper2.body,position.y);
  console.log(paper2.body,angle);
  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  ground.display();
  dustbin1.display();
  
  drawSprites();
 
}



