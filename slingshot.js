class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    fly(){
        this.slingshot.bodyA = null;
    }
    
    display(){
        if(this.slingshot.BodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(3);
        stroke("white");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    
}