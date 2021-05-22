const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var cat,catImage;
var sound;

var bg,bgImg;

var snow=[];

function preload(){
bgImg=loadImage("snow1.jpg");
catImage=loadAnimation("cat2.png","cat3.png");
sound=loadSound("sound/JoyMusic.mp3")
}




function setup() {
   createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
 
  sound.play();

  cat=createSprite(470,500,20,20);
  cat.addAnimation("catstanding",catImage);
  cat.scale=0.2;


  

 
  //create snowfall objects


  for (var e = 0; e<=width-30;  e=e+50)
  {
  snow.push(new snowfall(e,375));
  }




  
   }

function draw() {

  background(bgImg);
  textSize(20);
  fill("black");
  text("Press Space Key To Reset The Cat",400,50);


  cat.velocityX=-30;



  


  Engine.update(engine);

    for (var e = 0; e <200; e++) {
      snow.push(new snowfall(random(0,800),random(0,800)));

      snow[e].display();
    }


  if(frameCount%60 === 0){
    snow.push(new snowfall(random(0,800),random(0,800)));
    }




  
  
  drawSprites(); 
  
  }




function keyPressed(){
if(keyCode===32){
cat.x=470;
cat.y=500;
}
}
