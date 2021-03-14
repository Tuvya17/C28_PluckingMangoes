
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy
var boyimg

function preload()
{
	boyimg = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	engine = Engine.create();
    world = engine.world;
    Engine.run(engine)
	var canvas = createCanvas(1300, 700);
	
	ground = new Ground(650,670,1300,20);
	tree = new Tree(1000,387,600,600);
	mango1 = new Mango(907,155,30);
	mango2 = new Mango(1037,139,30);
	mango3 = new Mango(778,264,20);
	mango4 = new Mango(860,260,25);
	mango5 = new Mango(800,300,30);
	mango6 = new Mango(970,168,25);
	mango7 = new Mango(885,313,30);
	mango8 = new Mango(1076,312,20);
	mango9 = new Mango(1050,206,25);
	mango10 = new Mango(936,231,30);
  mango11 = new Mango(975,265,25);
  mango12 = new Mango(1120,207,20);
  mango13 = new Mango(1153,250,25);
  mango14 = new Mango(1232,276,30);
  mango15 = new Mango(1150,301,20);
  
  
  boy = createSprite(300,600,40,40);
	boy.addImage("boyimg",boyimg);
	boy.scale = 0.1
	stone = new Stone(500,500,40);

  slingshot = new Slingshot(stone.body,{x:300,y:400});
	
            
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  
  stone.display();
  slingshot.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);
  detectollision(stone,mango13);
  detectollision(stone,mango14);
  detectollision(stone,mango15);
  
  drawSprites();
 
}


function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}


function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
