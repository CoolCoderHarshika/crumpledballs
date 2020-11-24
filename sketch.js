
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1
var ground2
var ground3
var ground4

var paper1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground1=new Ground(600,600,1800,10)
	ground2=new Ground(600,580,150,10)
	ground3=new Ground(530,540,10,100)
	ground4=new Ground(670,540,10,100)
	paper1=new Paper(20,100,40)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display()
  ground2.display()
  ground3.display()
  ground4.display()
  
  paper1.display()

}


	function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}


