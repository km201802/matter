// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var suelos = [];
var circulos = [];
var puntos = [];
var width = innerWidth;
var height = innerHeight;
var world;


function setup(){
    width = innerWidth;
    height = innerHeight;

    createCanvas(width,height);
    engine = Engine.create();

    var h = 100;
    var v = 100;
    var j = h/4;
    world = engine.world;
    for(var i=150; i<(height*0.8); i += h){
        for(var e=j; e<width; e += v){
            puntos.push(new Circle(e, i, 4, true));
        }
        j = -j;
    }
    suelos.push(new Box(0,height/2,height,30, PI/2, true));
    suelos.push(new Box(width,height/2,height,30, PI/2, true));
    suelos.push(new Box(width/2,height*0.95,width,30, 0, true));
    //console.log(engine.world);
}
console.log(`${height} X ${width}`);
function draw(){
    background(100);
    if(mouseIsPressed){
        circulos.push(new Circle(mouseX,mouseY,20,false));
    }
    for(var i=0; i<suelos.length; i++){
        suelos[i].draw();
    }
    for(var i=0; i<puntos.length; i++){
        puntos[i].draw();
    }
    for(var i=0; i<circulos.length; i++){
        circulos[i].Frames();
        circulos[i].draw();
        if(circulos[i].borrar()){
            circulos[i].eliminar();
            circulos.splice(i, 1);
            i--;
        }
        if(circulos[i].frames > 1000){
            circulos[i].eliminar();
            circulos.splice(i, 1);

    }
    }
    /*if(circulos.length > 15){
        circulos[14].circle.isStatic = true;
    }*/
    push();
    textAlign(CENTER);
    rectMode(CENTER);
    fill("black");
    textSize(22);
    textFont("Arial");
    text( `${circulos.length} : ${world.bodies.length}` , 40, 40);
    pop();
    Engine.update(engine);
}
