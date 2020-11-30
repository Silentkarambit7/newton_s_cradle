class Weight {
    constructor(x, y,radius,options) {
      var options = {
          isStatic:false,
          
          density:0.2
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.radius=radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      
      fill(rgb(224, 64, 230));
      
      circle(this.body.position.x,this.body.position.y, this.radius+40,this.radius+40);
      
    }
  }
  