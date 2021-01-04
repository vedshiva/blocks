class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':2,
          'density':1.0
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed > 6){
        World.remove(world, this.body);
        this.Visiblity = this.Visiblity - 10;
        
      
       }
      else{
      
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
   
        rect(0, 0, this.width, this.height);
  
        pop(); 
      }
    }
      score(){
        if (this.Visiblity < 0 && this.Visiblity > -1005){
          score++;
        }
      }
   };