
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Weight1=new Weight(400,300,40);
	ground=Bodies.rectangle(400,670,800,40,{isStatic:true});
	World.add(world,ground);
	Steel=new Bar(400,250,600,40);
	chain1=new Chain(Steel.body,Weight1.body,-80,0,0,0);
	Weight2=new Weight(450,300,40);
	chain2=new Chain(Steel.body,Weight2.body,0,0,0,0);
	Weight3=new Weight(500,300,40);
	chain3=new Chain(Steel.body,Weight3.body,80,0,0,0);
	Weight4=new Weight(550,300,40);
	chain4=new Chain(Steel.body,Weight4.body,150,0,0,0);
	Weight5=new Weight(100,0,40);
	chain5=new Chain(Steel.body,Weight5.body,-150,0,0,0);
	
	

	Engine.run(engine);
	startup();
  
}


function draw() {
 
  background(255);
  textSize(48);
  fill("black");
  text("Press -> Right Arrrow",200,100);
 
  
  chain1.display();
  Weight1.display();
  chain2.display();
  Weight2.display();
  chain3.display();
  Weight3.display();
  chain4.display();
  Weight4.display();
  chain5.display();
  Weight5.display();
  Steel.display();
  
  fill("red");
  rectMode(CENTER);
  rect(400,670,800,40);
  
  drawSprites();

 
}
function keyPressed(){
	if(keyCode===RIGHT_ARROW){
		
		Matter.Body.setStatic(Weight5.body,false);
		
	}
}
function startup(){
	Matter.Body.setStatic(Weight5.body,true);	
}



