class Paper {
  constructor(x, y) {
    var options = {
     // if(keyCode === DOWN_ARROW){
        'restitution':0.8
    //}
  }
    this.body = Bodies.circle(x, y, 20, options);
    this.radius = 20
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
  //  pos.x = mouseX
    //pos.y = mouseY
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("magenta");
    ellipse(0, 0, this.radius);
    pop();
  }
 };
