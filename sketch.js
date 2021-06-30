var snow = [];

const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 


function preload(){
  bgImg = loadImage("snow3.jpg");

}
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world; 

  snow = new Snow(400,200,60);


  
}

function draw() {
  background(bgImg);  
  Engine.update(engine);
  snow.display();
  
  
  drawSprites();
}