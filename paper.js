constructor(x,y);{
    var option={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
    }

this.body = Bodies.rectangle(x,y,50,50,options);
this.width = 50;
this.height = 50;

World.add(world,this.body);	
}
display();{
    var pos =this.body.position;
    var angle =this.body.angle;
    Push();
    Translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);

}

function setup() {
	createCanvas(800, 700);
fill("green");
rect(0,0,this.width,this.height);
Pop();

}






