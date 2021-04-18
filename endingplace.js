class EndingPlace {
    constructor(x, y, width, height){
        this.x=40;
        this.y=30;
        this.width=80;
        this.height=60;
        this.shapeColor="#55c1d5"
        this.body=Bodies.rectangle(x, y, width, height);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(x, y, this.width, this.height);
        image(this.image, pos.x, pos.y, this.height, this.width);
        pop();
    }
}