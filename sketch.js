const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,bGround;
var slingShot;
var polygon;



function preload(){
    pgon=loadImage("polygon.png");
}

function setup(){
    createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;
    ball = Bodies.circle(50,200,20);
    World.add(world, ball);
    slingShot = new SlingShot(this.ball, {x:100, y:200})

    ground = new Ground(390, 300, 350, 10);
    bGround = new Ground(650, 600, 1300, 25)
    World.add(world, ground);
    box1 = new Box(330, 235, 30, 40);
    box2 = new Box(360, 235, 30, 40);
    box3 = new Box(390, 235, 30, 40);
    box4 = new Box(420, 235, 30, 40);
    box5 = new Box(450, 235, 30, 40);
    box6 = new Box(360, 195, 30, 40);
    box7 = new Box(392, 275, 30, 40);
    box8 = new Box(422, 275, 30, 40);
    box9 = new Box(479, 275, 30, 40);
    box10 = new Box(302, 275, 30, 40)
    box11 = new Box(333, 275, 30, 40)
    box12 = new Box(364, 275, 30, 40)
    box13 = new Box(429, 275, 30, 40)
    box14 = new Box(390, 195, 30, 40)
    box15 = new Box(420, 195, 30, 40)
    box16 = new Box(390, 155, 30, 40)

    
    

}

function draw(){
    background("blue");
    Engine.update(engine);
    ground.display()
      box1.display()
      box2.display()
      box3.display()
      box4.display()
      box5.display()
      box6.display()
      box7.display()
      box8.display()
      box9.display()
      box10.display()
      box11.display()
      box12.display()
      box13.display()
      box14.display()
      box15.display()
      box16.display()
      bGround.display()
      slingShot.display()

    imageMode(CENTER);
    image(pgon, ball.position.x, ball.position.y, 40, 40);

    

   

}
function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingShot.attach(this.ball);
    }
}
