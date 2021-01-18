
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj,stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;
var rock;
var shoot;
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1031,142,30);
	mango3=new mango(956,264,30);
	mango4=new mango(1109, 183,30);
	mango5=new mango(924,196,30); 
	mango6=new mango(1041, 239,30);
	mango7=new mango(1132,269,30);
	mango8=new mango(980,148,30);
	mango9=new mango(999,226,30);
	mango10=new mango(1179,230,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new Stone(250,439,30);
	Engine.run(engine);
    shoot=new Shooter(stoneObj,{x:260, y:439});
}

function draw() {
	
  background(230);
  console.log(mouseX,mouseY);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
 
  treeObj.display();
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
  groundObject.display();
  stoneObj.display();
  shoot.display();
  detectcollision(rock,mango1);
  detectcollision(rock,mango2);
  detectcollision(rock,mango3);
  detectcollision(rock,mango4);
  detectcollision(rock,mango5);
  detectcollision(rock,mango6);
  detectcollision(rock,mango7);
  detectcollision(rock,mango8)
  detectcollision(rock,mango9)
  detectcollision(rock,mango10)
}
function mouseReleased(){
Matter.body.setPosition (stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseDragged(){
	stoneObj.fly();
}
/*function keyPressed(){
	if(keyCode===32)[
		Matter.body.setPosition(rock,{x:235,y:420})
		launcherObject.attach(rock)
	]
}*/
function detectcollision(rock,mango){
	mangoBodyPosition =lmango.body.mangoBodyPosition;
	rockBodyPosition =lrock.body.mangoBodyPosition;
var distance=dist(rockBodyPosition.x,rockBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lrock){
	Matter.body.setStatic(lmango.body,false);
}
}
