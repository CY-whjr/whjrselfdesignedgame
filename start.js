class Start {
    constructor(x, y, width, height){
        this.x = 0;
        this.y = 400;
        this.width = 80;
        this.height = 50;
        this.body = Bodies.rectangle(x, y, width, height);
        World.add(world, this.body);
    }

    display(){
        var pos=this.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}