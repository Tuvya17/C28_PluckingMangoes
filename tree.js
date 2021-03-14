class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.treeimage = loadImage("plucking mangoes/tree.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.treeimage, 0, 0, this.width, this.height);
      pop();
    }
  };
