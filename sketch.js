const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var myWorld, myEngine, box;
var ground;

var box1,box2;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var option ={
    isStatic: true 
  }

 

ground=new Ground (200,390,400,20);
box1=new Box(100,100,40,40);
box2=new Box(130,50,40,40);







 

}

function draw() {
  background(0); 
  Engine.update(myEngine);
 
  


box1.display();
box2.display();
ground.display();


}