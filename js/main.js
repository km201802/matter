// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var suelos = [];
var circulos = [];
var width = innerWidth;
var height = innerHeight;


function setup(){
    width = innerWidth;
    height = innerHeight;
    createCanvas(width,height);
    engine = Engine.create();
    circulos.push(new Circle(300,50,20,false));
    suelos.push(new Box(width/2,height*0.95,width,30,true))
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
    for(var i=0; i<circulos.length; i++){
        circulos[i].draw();
        if(circulos[i].borrar){
            alert(circulos[i].borrar);
            circulos.splice(i, 1);
        }
    }
    console.log(circulos.length);
    Engine.update(engine);
}
