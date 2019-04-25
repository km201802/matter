// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var suelos = [];
var circulos = [];



function setup(){
    createCanvas(600,600);
    engine = Engine.create();
    circulos.push(new Circle(300,50,20));
    suelos.push(new Ground(300,550,600,30))
}
function draw(){
    background(100);
    
    for(var i=0; i<suelos.length; i++){
        suelos[i].draw();
    }
    for(var i=0; i<circulos.length; i++){
        circulos[i].draw();
    }
    
    Engine.update(engine);
}
