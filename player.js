class Player {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.image=loadImage("./images/playerstar.png");
    }
    display(){
        rectMode(CENTER);
        imageMode(CENTER);
        this.image(this.image, pos.x, pos.y, this.height, this.width)
    }
}