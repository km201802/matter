// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var suelos = [];
var circulos = [];

function Circle(x, y, r){
    var circle = Bodies.circle(x, y, r);
    World.add(engine.world, circle);
    
    this.position = circle.position;
    
    this.draw = function(){
        push();
        translate(this.position.x, this.position.y);
        ellipse(0, 0, r*2);
        pop();
    }
}
function Ground(x, y, w, h){
    var options = {
        isStatic: true,
        friction: 0
    }
    var ground = Bodies.rectangle(x, y, w, h, options);
    World.add(engine.world, ground);
    
    this.position = ground.position;
    
    this.draw = function(){
        push();
        translate(this.position.x, this.position.y);
        rectMode(CENTER);
        rect(0, 0, w, h);
        pop();
    }
}


function setup(){
    createCanvas(600,600);
    engine = Engine.create();
    circulos.push(new Circle(300,50,20));
    suelos.push(new Ground(300,550,30,600))
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
