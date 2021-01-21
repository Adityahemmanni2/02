// we are giving physics in this
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//this is to give variable
var engine,world;
var ground,ball;
function setup(){
   //creating Canvas
   var canvas = createCanvas(400,400);
   //creating engine and adding world in physics engine
    engine = Engine.create(); 
    world = engine.world; 
   var ground_options={
      //means to the ground doesn`t move
isStatic:true
   }
   //creating ground
ground=Bodies.rectangle(200,390,200,20,ground_options);
World.add(world,ground);
//creating ball
var ball_options={
 restitution:1.0      
}
ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
  }
   function draw(){
      //creating background
      background(0);
      Engine.update(engine);
       rectMode(CENTER);
//giving position to ground and ball
        rect(ground.position.x,ground.position.y,400,20);
   ellipseMode(RADIUS);
   ellipse(ball.position.x,ball.position.y,20,20);
       }