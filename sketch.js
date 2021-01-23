var drop,dropImg;
var umbrella,umbrellaImg;

function preload(){
    dropImg=loadAnimation("thunderbolt/1.png,2.png,3.png,4.png")
    umbrellaImg=loadAnimation("Walking Frame/walking_1.png,walking_2.png,walking_3.png,walking_4.png,walking_5.pngwalking_6.png,walking_7.png,walking_8.png")

}

function setup(){
   createCanvas(500,500)
    
   drop=createSprite(10,10,50,50);
   drop.addImage(dropImg);

   umbrella.addImage(umbrellaImg);


}

function draw(){
drop();


    drawSprites();
}   

