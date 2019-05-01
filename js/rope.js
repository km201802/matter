var circulos = [];
var Circulos = [];
var Rope = function(x, y, r, l, n, p){
    this.length = Circulos.length;
    this.static = true;
    for(var i=0; i<n; i++){
      Circulos.push(new Circle(x,y+(i*10),r, this.static));
        this.static = false;
        if(p===true && i==n-2){
            this.static = true;
        }
    }
    this.puente = function(){
        
    }
    
    for(var i=this.length; i<Circulos.length-1; i++){
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
var Bridge = function(x, y, x2, y2, r, l, n, p){
    this.length = Circulos.length;
    this.static = true;
    for(var i=0; i<n; i++){
      Circulos.push(new Circle(x+10*cos(i),y+10*sin(i),r, this.static));
        this.static = false;
    }
    Circulos.push(new Circle(x2, y2, r, true));
    this.puente = function(){
        
    }
    
    for(var i=this.length; i<Circulos.length-1; i++){
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
