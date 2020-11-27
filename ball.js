class ball
{
 constructor (x,y)
 {
  
 var options={
     'isStatic':false,
    'restitution' : 0.3,
    'friction' : 0.5,
    'density' : 1.2,
 }
 this.body = Bodies.circle(x,y,7.5,options)
 this.r = 7.5;
 World.add(world,this.body);
 }

 display()
 {
    var pos = this.body.position;
    push();
	translate(pos.x , pos.y);
	imageMode(CENTER);
   ellipseMode(RADIUS)
   ellipse(pos.x,pos.y,this.r,this.r);  
   pop(); 
 }
}; 
