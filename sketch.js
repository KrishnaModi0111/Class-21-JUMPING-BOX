var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    edges=createEdgeSprites()
    //moving Rectaangle
    rectangle1=createSprite(200,200,70,70)
    rectangle1.shapeColor="red"
    rectangle1.velocityX=10
    rectangle1.velocityY=10
    //create 4 fixed rectangle
fixedRect1=createSprite(100,550,150,30)
fixedRect1.shapeColor="green"

fixedRect2=createSprite(300,550,150,30)
fixedRect2.shapeColor="blue"

fixedRect3=createSprite(500,550,150,30)
fixedRect3.shapeColor="pink"

fixedRect4=createSprite(700,550,150,30)
fixedRect4.shapeColor="purple"


    //create box sprite and give velocity

}

function draw() {
    background("black");
music.play()

    rectangle1.bounceOff(edges)
    if(rectangle1.isTouching(fixedRect1)){
        rectangle1.bounceOff(fixedRect1)
        rectangle1.shapeColor="green"
    }

    if(rectangle1.isTouching(fixedRect2)){
        rectangle1.bounceOff(fixedRect2)
        rectangle1.shapeColor="blue"
    }

    if(rectangle1.isTouching(fixedRect3)){
        rectangle1.bounceOff(fixedRect3)
        rectangle1.shapeColor="pink"
    }

    if(rectangle1.isTouching(fixedRect4)){
        rectangle1.bounceOff(fixedRect4)
        rectangle1.shapeColor="purple"
    }

    //create edgeSprite

 drawSprites()

    //add condition to check if box touching surface and make it box
}

//rectangle1.display()