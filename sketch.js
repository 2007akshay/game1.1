var boy , boyA ,button
var gameState = 0
var wall , wal_li
var backgroundIntro
var buttonI
var fBackground , sBackground
var button1 , button2 , b1 , b2
var button
var button3 , button4 , b3 , b4
var button5 , b5
var menu , mI
var input
var bnext , bnexti
var name
var background0
var w1

function preload(){
boyA=loadAnimation("running1.png","running2.png","running3.png","running4.png","running5.png")
wall_i=loadImage("wall1.png")
backgroundIntro=loadImage("background.jpg")
buttonI=loadImage("buttonStart.png")
fBackground=loadImage("backgroun1.jpg")
sBackground=loadImage("sunrise.png")
  mI=loadImage("menu.png")
  background0=loadImage("hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095 (1).png")
  bnexti=loadImage("PngItem_3206837.png")
  b1=loadImage("1num1.png")
  b2=loadImage("2num2.png")
  b3=loadImage("3num3.png")
  b4=loadImage("4num4.png")
  b5=loadImage("5num5.png")


}
function setup(){
  createCanvas(400,400)  
  bnext=createSprite(200,300,50,10)
  bnext.addImage(bnexti)
  bnext.scale=0.1 
  
  bnext.visible=true
  
  boy=createSprite(200,200,10,10)
  boy.addAnimation("running",boyA)
  boy.visible = false;
  
  button=createSprite(200,200,50,10)
  button.addImage(buttonI)
  button.scale=0.2
  button.visible=true
  
  button1=createSprite(150,90,50,10)
  button1.addImage(b1)
  button1.scale=1
  
  button2=createSprite(250,90,50,10)
  button2.addImage(b2)
  button2.scale=1
  
  button3=createSprite(100,175,50,10)
  button3.addImage(b3)
  button3.scale=1

  button4=createSprite(200,175,50,10)
  button4.addImage(b4)
  button4.scale=1
  
  button5=createSprite(300,175,50,10)
  button5.addImage(b5)
  button5.scale=1
  
  menu=createSprite(47,20,70,30)
  menu.addImage(mI)
  menu.scale=0.2
  menu.visible=true
  
  input=createInput("")
  input.position(120,100)
  
  nicname=createElement('h4')
  nicname.fontColor="red"
  nicname.html("Username")
  
  nicname.position(40,80)
 

}
function draw(){
background("blue")
if(gameState===0){
  background(background0)
  
  button.visible=false
  button1.visible=false
  button2.visible=false
  button3.visible=false
  button4.visible=false
  button5.visible=false
 if(mousePressedOver(bnext)&&gameState===0){
   name=input.value();
   console.log(name)
   gameState=1
   nicname.hide();
 }
   menu.visible=false
  
} 

if (gameState === 1){
  background(fBackground)
level0();
textSize(30)
strokeWeight(5);
stroke("red")
fill("yellow")
textFont("Calibry")
text("Welcome ",130,80)
  bnext.visible=false
  button.visible=true;
  button1.visible=false
  button2.visible=false
  button3.visible=false
  button4.visible=false
  button5.visible=false
  if(mousePressedOver(button)&&gameState===1){
    gameState=2
    }
  input.hide();

   menu.visible=false
}

if(gameState===2){
  background(backgroundIntro)
  button.destroy()
  level1();
 // imageMode(CENTER)
//image(wall_i,100,200,150,20)
  //text("welcosfhghhrgkrghi   ",120,20)
  menu.visible=false
  bnext.visible=false
  button.visible=false 
  button1.visible=true
  button2.visible=true
  button3.visible=true
  button4.visible=true
  button5.visible=true
 input.hide();
  if(mousePressedOver(button1)){
    gameState=3
    button1.visible=false;
  }
  nicname.hide();
}
  
  if(gameState===3){
   
    level2();
    bnext.visible=false
  button.visible=false  
  button1.visible=false
  button2.visible=false
  button3.visible=false
  button4.visible=false
  button5.visible=false
  input.hide();
     nicname.hide();
    
   menu.visible=true
  }

drawSprites();
}

function level0(){
  
  if (mousePressedOver(button)){
   //button.visible=false
gameState=1

  }
}


function   level1(){
  fill("white");
textSize(25);
textFont('Algerian');
  text("Select the level of",75,24) 
  text("your choice",125,50)
  fill("yellow")
  textFont('Blackadder ITC');
  text("Hi  "+name,100,350)
  
    if(mousePressedOver(button1)){
    gameState=2
    button1.visible=false;
  }
}

function level2(){
  background(sBackground) 
  if(mousePressedOver(menu)){
    gameState=2
  }
}