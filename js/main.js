// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint;

var engine;
var suelos = [];
var circulos = [];
var cajas = [];
var ropes = [];
var width = innerWidth;
var height = innerHeight;
var world;
var angle = 0;


function setup(){
    width = innerWidth;
    height = innerHeight;

    createCanvas(width,height);
    engine = Engine.create();

    world = engine.world;
    //circulos.push(new Circle(300,50,20,false));
    suelos.push(new Box(width/2,height*0.95,width,30,0,true));
    
    circulos.push(new Circle(300,50,20,true));
    circulos.push(new Circle(400,50,20,false));
    var constraint = Constraint.create({
        bodyA: circulos[0].circle,
        bodyB: circulos[1].circle,
        length:500,
    });
    World.add(world, constraint);
}
var pos = 0
function mouseWheel(event) {
  pos += event.delta;
}
try {
  ropes.push(300, 50, 20, 50, 5);
}
catch(error) {
  alert(error);
}

console.log(`${height} X ${width}`);
function draw(){
    background(100);
    if(mouseIsPressed){
        //circulos.push(new Circle(mouseX,mouseY,20,false));
            cajas.push(new Box(mouseX, mouseY ,random(30, 60), random(30, 60),0,false));
    }
    for(var i=0; i<suelos.length; i++){
        suelos[i].draw();
    }
    for(var i=0; i<cajas.length; i++){
        cajas[i].draw();
        if(cajas[i].borrar()){
            cajas[i].a = pos/36;
            cajas[i].eliminar();
            cajas.splice(i, 1);
            i--;
        }
    }
    for(var i=0; i<circulos.length; i++){
        circulos[i].draw();
        if(circulos[i].borrar()){
            circulos[i].eliminar();
            circulos.splice(i, 1);
            i--;
        }
    }
    push();
    textAlign(CENTER);
    rectMode(CENTER);
    fill("black");
    textSize(22);
    textFont("Arial");
    //rect(40,40,40,40);
    text( `${circulos.length} : ${world.bodies.length}` , 300, 40);
    pop();
    Engine.update(engine);
}
