const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var engine, world;
function setup() {
var canvas = createCanvas(400,400);
engine = Engine.create();
world = engine.world;
var object_options = {
isStatic:true
}
var ball_option = {
respitution:1.0
}
object = Bodies.rectangle(200,390,200,20, object_options);
World.add(world,object);
ball = Bodies.circle(200,100,20, ball_options)
World.add(world,ball);
console.log(object);
console.log(object.type);
console.log(object.position.x);
console.log(object.position.y);
}




function draw() {
  background(0,0,0);  
  Engine.update(engine)
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 50, 50);
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20, 20)





}