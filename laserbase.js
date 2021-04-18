class LaserBase {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.01,
        }
        this.pointB=pointB;
        this.base = Constraint.create(options);
        World.add(world, this.base);
    }

    attach(body){
        this.base.bodyA = body;
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        var pointA = this.body.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        }
        pop();
    }
}