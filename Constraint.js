class Chain{
    constructor(bodyA,bodyB,offsetXA,offsetYA,offsetXB,offsetYB,){
        this.offsetXA=offsetXA;
        this.offsetYA=offsetYA;
        this.offsetXB=offsetXB;
        this.offsetYB=offsetYB;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:300,
            pointA:{x:this.offsetXA,y:this.offsetYA},
            pointB:{x:this.offsetXB,y:this.offsetYB}
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain);
    }
    display(){
        fill("black");
        strokeWeight(4);
        stroke(40);
        line(this.chain.bodyA.position.x+this.offsetXA,this.chain.bodyA.position.y+this.offsetYA,this.chain.bodyB.position.x+this.offsetXB,this.chain.bodyB.position.y+this.offsetYB); 
    }
}