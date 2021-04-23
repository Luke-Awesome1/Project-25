class Rect {
    constructor(x,y) {
        var options = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 160;
        this.thickness = 20;
        this.angle = 0;
        this.image = loadImage("dustbin.png");

        this.rect1 = Bodies.rectangle(this.x - (this.width / 2),this.y - (this.height/2),this.thickness,this.height,options);
        Matter.Body.setAngle(this.rect1,this.angle);
        this.rect2 = Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);
        this.rect3 = Bodies.rectangle(this.x + (this.width / 2),this.y - (this.height/2),this.thickness,this.height,options);
        Matter.Body.setAngle(this.rect3,-1 * this.angle);
        World.add(world,this.rect1);
        World.add(world,this.rect2);
        World.add(world,this.rect3);
    }

    display() {
        var posrect1 = this.rect1.position;
        var posrect2 = this.rect2.position;
        var posrect3 = this.rect3.position;

        push();
        translate(posrect1.x, posrect1.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(this.angle);
        rect(0,0,this.thickness,this.height);
        pop();

        push();
        translate(posrect2.x, posrect2.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rect(0,0,this.width,this.thickness);
        pop();

        push();
        translate(posrect3.x, posrect3.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(-1 * this.angle);
        rect(0,0,this.thickness,this.height);
        pop();

        push();
        translate(this.x,this.y);
        imageMode(CENTER);
        image(this.image,0,-82,this.width+30,this.height+20);
        pop();
    }
}