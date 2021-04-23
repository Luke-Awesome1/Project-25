class Crumpled_ball {
    constructor(x,y,radius) {
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.2,
            density:1.2
        }
        
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body)
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius+55,this.radius+55);
        pop();
    }
}