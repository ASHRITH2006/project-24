class Paper{
    constructor(x, y, width, height) {
        var options = {
            'isStatic': false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, 1, 1, options);
        this.width = 1;
        this.height = 1;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        pop();
      }
}