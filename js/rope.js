var circulos = [];
var Circulos = [];
var Rope = function(x, y, r, l, n){
    this.static = true;
    for(var i=0; i<n; i++){
      Circulos.push(new Circle(x+(i*l),y,r, this.static));
        this.static = false;
    }
    
    for(var i=0; i<Circulos.length-1; i++){
        //if(i!=Circulos.length){
            var constraint = Constraint.create({
                bodyA: Circulos[i].circle,
                bodyB: Circulos[i+1].circle,
                length:l,
            });
            World.add(world, constraint);
        //}
    }
}
