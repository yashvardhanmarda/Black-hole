var bg;
var tunnel;
var tool1,tool2,tool3,tool4;
var bgImg;
var asImg;
var msImg;
var stgif;
var timer=60
var flag=false;
var visibility=255
var score=0

function preload() 
{
bgImg=loadImage("bg2.jpg");
stgif=loadImage("stellar nebula.jpeg");
asImg=loadImage("Averagestar.png");
msImg=loadImage("Massivestar.png");


}

function setup() {
  createCanvas(displayWidth,displayHeight);
   star=createSprite(displayWidth/3,displayHeight/4-100);
  star.addImage("as",asImg);
  star.addImage("ms",msImg);
  star.visible=false;
  let col = color(255,255,255);
  let button = createButton('take the challenge');
  button.style('background-color', col);
 button.position(displayWidth-200,100);
button.mousePressed(()=>{
 





let myDiv1 = createDiv("Stellar nebula is mostly composed of which gas ?");
myDiv1.style('font-size', '18px');
myDiv1.style('color', '#ff0000');
myDiv1.style('background-color', 'white');
myDiv1.position(displayWidth-500,270);

radio1 = createRadio();
 radio1.option("helium" );
 radio1.option("hydrogen");
 radio1.option('methane');

 radio1.style('color', '#ff0000');
 radio1.position(displayWidth-500,300)
 textAlign(RIGHT);

 let myDiv2 = createDiv('Which is the closest nebula to Earth ');
 myDiv2.style('font-size', '18px');
 myDiv2.style('color', '#ff0000');
 myDiv2.style('background-color', 'white');
 myDiv2.position(displayWidth-500,330);
 
 radio2 = createRadio();
   radio2.option('The helix nebula');
   radio2.option('Ring nebula');
   radio2.option('Orion nebula ');
 
   radio2.style('color', '#ff0000');
   radio2.position(displayWidth-500,380)
   textAlign(RIGHT);


   let myDiv3 = createDiv('The first Nebula was discovered by');
myDiv3 .style('font-size', '18px');
myDiv3 .style('color', '#ff0000');
myDiv3 .style('background-color', 'white');
myDiv3 .position(displayWidth-500,410);

radio3 = createRadio();
 radio3.option('Isaac Newton ');
 radio3.option('Sir Arthur Eddington  ');
 radio3.option('Charles Messier');

 radio3.style('color', '#ff0000');
 radio3.position(displayWidth-500,440)
 textAlign(RIGHT);



 
flag=true
});


}

function draw() {
  background(0);
 
  drawSprites()
  textSize(50)
   fill ("red") 
   text("Timer:"+timer,200,50)
   if(flag===true){
     if(timer>0){
      timer--
      tint (255,visibility);
      image(stgif,displayWidth/3,displayHeight/4-100);
      visibility=visibility-4
     }
     else{
       star.visible=true
     }
   }
   else{
    image(stgif,displayWidth/3,displayHeight/4-100); 
   }
 }
 