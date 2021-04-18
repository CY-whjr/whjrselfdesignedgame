class Guard {
    constructor(x, y, width, height){
        this.height = 50;
        this.width = 50;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(x, y, this.width, this.height);
        pop();
    }

    endGame(){
        if (player.isTouching(guardsGroup)){
            end();
        }
    }
}