var fricc = 0.05;
function Circle(x, y, r, s){ //(x, y, radio, static)
    this.frames = 0;
    var options = {
        friction: fricc,
        restitution: 0.5,
        //gravityScale: 0,
        isStatic: s,
        
    };
    this.circle = Bodies.circle(x, y, r, options);
    World.add(world, this.circle);
    this.circle.velocity.x = 3;
    this.circle.velocity.y = 5;
    
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
    }
}
function Box(x, y, w, h, a, s){ // (x, y, width, height, angle, isStatic)
    this.a = a;
    var options = {
        isStatic: s,
        friction: fricc,
        restitution: 0.5,
        angle: a,
    }
    this.box = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.box);
    
    this.position = this.box.position;
    
    this.borrar = function(){
        return (this.position.y > height+100)
    }
    this.eliminar = function(){
        World.remove(world, this.box);
    }
    
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

//var Rope = function ();


