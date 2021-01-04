class Heptagon {
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':1.0
        }
    this.image = loadImage ("polygon.png")
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 50;
    this.height = 50;

    World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;

        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill (100)
        rect(0, 0, this.width, this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}