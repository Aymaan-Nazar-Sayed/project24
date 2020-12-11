
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var groundSprite;
var rectangle1,rectangle2,rectangle3;


var options = {
	'isStatic':false,
	'restitution':0.3,
	'friction': 0.5,
	'density':1.2
}

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	paperBall= new Ball(50,250,40,40,options);
	paperBall.shapeColor="red"


	

	rectangle1=new Dustbin(190,540,20,150);
	rectangle1.shapeColor="blue"

	rectangle2=new Dustbin(540,540,20,150);
	rectangle2.shapeColor="blue"

	rectangle3=new Dustbin(365, 610, 300,20);
	rectangle3.shapeColor="blue"

	




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
	


	Engine.run(engine);
	


}


function draw() {
  rectMode(CENTER);
  background("green");
keyPressed();
  drawSprites();



  paperBall.display();
 rectangle1.display();
 rectangle2.diaplay();
 rectangle3.display();

  
function keyPressed() { 
	
	paperBall.position.x = mouseX;
	paperBall.position.y = mouseY;
 }
 

  
 

 
}



