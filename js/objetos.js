function Circle(x, y, r, s){ //(x, y, radio, static)
    this.frames = 0;
    var options = {
        friction: 0,
        restitution: 0.7,
        gravityScale: 0,
        isStatic: s,
        
    };
    this.circle = Bodies.circle(x, y, r, options);
    World.add(world, this.circle);
    Matter.Body.setVelocity(this.circle, 1);
    
    this.position = this.circle.position;

    this.borrar = function(){
        return (this.position.y > height+100)
    }
    this.eliminar = function(){
        World.remove(world, this.circle);
    }
    this.Frames = function(){
        this.frames++;
    }

    this.draw = function(){
        push();
        translate(this.position.x, this.position.y);
        ellipse(0, 0, r*2);
        pop();
        this.frames++;
    //console.log();
    }
world.gravity.y = 0;
}
function Box(x, y, w, h, a, s){ // (x, y, width, height, angle, isStatic)
    this.a = a;
    var options = {
        isStatic: s,
        friction: 0,
        restitution: 1,
        angle: a,
    }
    this.box = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.box);
    this.position = this.box.position;
    
    this.draw = function(){
        this.angle = this.box.angle;
        push();
        rectMode(CENTER);
        //alert(this.angle);
        translate(this.position.x, this.position.y);
        rotate(this.angle);
        rect(0, 0, w, h);
        pop();
    }
}
