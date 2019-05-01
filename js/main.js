// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint;

var engine;
var suelos = [];
//var circulos = [];
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
    suelos.push(new Box(width/2,height*0.95,width,30,0,true));
    /*for(var i=0; i<Circulos.length; i++){
        Circulos[i].
    }*/
    //new Rope(200,100,20,40,13);
    //new Rope(400,100,20,40,13);
    new Bridge(100, 100, 700, 100, 20, 40, 23);
    //new Bridge(600, 100, 1300, 100, 20, 40, 25);
    
}
var pos = 0
function mouseWheel(event) {
  pos += event.delta;
}


console.log(`${height} X ${width}`);
function draw(){
    background(100);
    if(mouseIsPressed){
        //circulos.push(new Circle(mouseX,mouseY,random(20,40),false));
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
    for(var i=0; i<Circulos.length; i++){
        Circulos[i].draw();
        if(Circulos[i].borrar()){
            Circulos[i].eliminar();
            Circulos.splice(i, 1);
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
