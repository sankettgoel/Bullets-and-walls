var Bullet,wall;
var speed,weight;



function setup() 
{
  createCanvas(1500,400);
  speed=random(223,321)
  weight= random(30,52)
  thickness= random (22,83)
  Bullet=createSprite(50, 200, 50, 50);
  Bullet.velocityX= speed;
  Bullet.shapeColor="red"
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor="green"

}

function draw() {
  background(255,255,255);
  
  if(hasCollided(Bullet,wall))
  {
    Bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      Bullet.shapeColor=("yellow")
    }
    if(damage<10)
    {
      Bullet.shapeColor=("white")
    }
  }


  drawSprites();
}

function hasCollided (lBullet,lwall)
{
  BulletRightEdge=lBullet.x+lBullet.width;
  wallLeftEdge=lwall.x;
  if (BulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;



}


