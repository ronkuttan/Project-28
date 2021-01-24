
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;


var treeObj, stoneObj, launcherObject;
var mango1,groundObject1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,25);
	mango2=new mango(1000,120,23);
	mango3=new mango(1050,145,27);
	mango4=new mango(1030,200,24);
	mango5=new mango(1200,180,25);
	mango6=new mango(1100,200,23);
	mango7=new mango(1150,225,27);
	mango8=new mango(1130,280,24);
	mango9 = new mango(1000,280,28.1)
	mango10=new mango(900,200,23);
	mango11=new mango(950,225,27);
	mango12=new mango(930,280,24);
	mango13=new mango(1145,145,27.7);
	mango14=new mango(1225,255,27.5);
	

	stoneObj = new stone(240,453,35)

	treeObj=new tree(1050,610);
  groundObject1=new ground(width/2,600,width,20);
  groundObject2=new ground(1303.7,height/2,5,height);
	launcherObject = new launcher(stoneObj.body,{x:240, y:430});
	
	Engine.run(engine);

}

function draw() {
  background(230);
  Engine.update(engine);
  //Add code for displaying text here!
  image(boy ,200,365,200,300);
  textSize(15)
  fill("black")
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY!!",25,30);

  treeObj.display();
  stoneObj.display();
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
  launcherObject.display();

  

  groundObject1.display();
  groundObject2.display();


  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
  detectollision(stoneObj,mango13);
  detectollision(stoneObj,mango14);
  
  
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    launcherObject.fly();
}
function keyPressed(){
	if(keyCode ===32){
		Matter.Body.setPosition(stoneObj.body, {x: 240, y:430});
		launcherObject.attach(stoneObj.body);
	}
}

function detectollision(lstone,lmango){
	mangoBodyPos = lmango.body.position
	stoneBodyPos = lstone.body.position

	var distance = dist(stoneBodyPos.x,stoneBodyPos.y,mangoBodyPos.x,mangoBodyPos.y)
	 if(distance<=lmango.r+lstone.r){
		 Matter.Body.setStatic(lmango.body,false);

	 }
}
