class Shooter{
constructor(bodyA,bodyB){
var options={
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.04,
length:5
}
this.bodyB=bodyB
this.shotters=Constraint.create(options)
World.add(world,this.shotters);
}
fly(){
    this.shotters.bodyA=null
}
display(){
    if(this.shotters.bodyA){
        var pointA = this.Shooters.bodyA.position;
        var pointB = this.bodyB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}