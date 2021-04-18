class Obstacle{
    constructor(x, y, width, height, angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.shapeColor = ("#547ee0");
        this.body=Bodies.rectangle(x, y, this.width, this.height);
        World.add(world, this.body);
    }

    display(){
        var pos=this.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(x, y, this.width, this.height);
        pop();
    }

    endGame(){
        if (player.isTouching(obstaclesGroup)){
            end();
        }
    }
}