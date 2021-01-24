class launcher{
    constructor(body,pointB){
        var options={
            bodyA: body, 
            pointB: pointB,
            stiffness : 0.004,
            length : 1
        }
        this.pointB = pointB;
        this.launcherObject = Constraint.create(options);
        World.add(world,this.launcherObject);
    }
    display(){
        if(this.launcherObject.bodyA){ 
            var pointA = this.launcherObject.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2)
            line(pointA.x, pointA.y, pointB.x,pointB.y)
        }
    }
    fly(){
        this.launcherObject.bodyA = null;
    }
    attach(body){
        this.launcherObject.bodyA = body
    }

}

