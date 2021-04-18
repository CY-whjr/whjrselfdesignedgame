class Laser {
    constructor(x, y, width, height){
        this.height = 40;
        this.width = 10;
        this.shapeColor = ('#7b49d8');
        this.body = Bodies.rectangle(x, y, width, height);
        World.add(world, this.body)
    }
    
    display(){
        //stroke color
        stroke('#e1d4fc')

        //stroke thickness
        strokeWeight(5);

        if (player.isTouching(laserGroups)){
            end();
        }
        push();
        var pos = this.position;
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }

    rotate() {
        scAngle = map(sc, 0, 60, 0, 360);
        this.body
    }

}