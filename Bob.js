class Bob {
    constructor(x, y,r){
        var option = {
            isStatic: false,
            restitution: 1, 
            friction: 0,
            density: 0.8,
        
        }

        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);

       // console.log(this.body);
    }

    display(){
        push();
        ellipseMode(RADIUS);
        fill(254, 0, 255);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}