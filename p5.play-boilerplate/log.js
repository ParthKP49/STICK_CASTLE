class log {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
    display(){
        stroke(255);
        strokeWeight(2);
        noFill();
        rect(this.x,this.y,this.width,this.height);
    }
}