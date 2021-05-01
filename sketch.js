const Engine = Matter.Engine;
const Bodies = Matter.Bodies
const World = Matter.World


var engine,world,obj1;

function setup() {
  createCanvas(800,400);
   engine = Engine.create();
   world = engine.world;

    var opt1= {
      isStatic:true,
      
    }
   var opt2 = {
     restitution: 1.5
   }
  var opt3 = {
    restitution: 1.5
  }

  obj1 = Bodies.rectangle(10,390,700,10,opt1);
  World.add(world,obj1);
   
  console.log(obj1);
obj2 = Bodies.rectangle(300,00,15,150,opt2)
World.add(world,obj2)
obj3 = Bodies.rectangle(500,00,15,150,opt3)
World.add(world,obj3)
}

function draw() {
  Engine.update(engine);
  background("lightblue");
  
  rect(obj1.position.x,obj1.position.y,800,10 );
  fill("lightgreen")
  ellipse(obj2.position.x, obj2.position.y, 200,200)
  ellipse(obj3.position.x, obj3.position.y, 100,100)
  
  
}