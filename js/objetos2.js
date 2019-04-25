function Circle(x, y, r){
    var options = {
        friction: 0,
        restitution: 1,
        gravityScale: 0,
        
    };
    var circle = Bodies.circle(x, y, r, options);
    World.add(engine.world, circle);
    circle.velocity.x = 3;
    circle.velocity.y = 5;
    
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
        friction: 0,
        restitution: 1
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
