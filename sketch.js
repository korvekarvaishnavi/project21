
var bullet,wall;
var speed,weight;
var deformation;
var thickness;


function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83));
  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor="white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);

 
 

}

function draw() {
  background("lightgreen"); 

  bullet.velocityX=speed;
  
  if(wall.x-bullet.x<wall.width/2 + bullet.width/2 ){
    bullet.velocityX=0;

    deformation =( 0.9*weight*speed*speed)/22500;
   if(deformation>180)
   {
    bullet.shapeColor="red";
    
   }
   else if(deformation<=180 && deformation>100)
   {
    bullet.shapeColor="yellow";
   
   }
   else if(deformation<=100)
   {
    bullet.shapeColor="green";
   
   }
  }

  drawSprites();
}