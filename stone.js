class Stone {
    constructor(x,y,r) {
      var options = {
          isStatic: false
      }
      this.stoneimage = loadImage("Plucking mangoes/stone.png");
      this.body = Bodies.circle(x,y,r,options);
      this.r = r
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.stoneimage,0, 0, this.r*2,this.r*2);
      pop();
    }
  };
