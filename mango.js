class Mango {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.mangoimage = loadImage("Plucking mangoes/mango.png");
      this.body = Bodies.circle(x,y,r,options);
      this.r = r
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.mangoimage, 0, 0, this.r*2, this.r*2);
      pop();
    }
  };
