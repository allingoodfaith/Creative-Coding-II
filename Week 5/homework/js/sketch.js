//variable for animation 
var myImage;
var myAnimation;
var myWalkAnimation;

var i = 0;
var j = 0;

//arrays
var idlePaths = [];
var walkPaths = [];
var walkAnimations = [];

//variable for candy
var GumDrop = [];
var CandyObject;
var c = 0; 
var circleR = 20;

function preload()
{
    idlePaths = loadStrings ("../images/idle/idle.txt");
    walkPaths = loadStrings("../images/walk/walk.txt");
}

function setup()
{
    createCanvas(500,500);
    
    CandyObject = new Candy();
    
    for(var c = 0; c < 3; c++)
    {
        CandyObject = new Candy (random(20, 500),random(20, 500),random(20,150)); 
        GumDrop[c] = CandyObject;   
    }  

    myAnimation = new animationImage(idlePaths, 0, 0, 208, 227);
    myWalkAnimation = new animationImage(walkPaths, 0, 0, 208, 227);
}


function draw()
{
    background(155,222,232);
   
    for (var c = 0; c < 3; c++) 
    {
        GumDrop[c].drawCandy();
        //console.log("test")
    }

    if(keyIsPressed)
    {
        if(key == 'd')
        {
            myWalkAnimations.setCurrentFrameCount(frameCount);
            myWalkAnimations.drawAnimation();
            myWalkAnimations.updatePosition('forward');
            myAnimation.updatePosition('forward');
        }
        else if(key == 'a')
        {
            myWalkAnimations.setCurrentFrameCount(frameCount);
            myWalkAnimations.drawAnimation();
            myWalkAnimations.updatePosition('reverse');
            myAnimation.updatePosition('reverse');
        }
        else
        {
            myAnimation.updatePosition('idle');
            myAnimation.setCurrentFrameCount(frameCount);
            myAnimation.drawAnimation();
        }
    }
    else
    {
        myAnimation.setCurrentFrameCount(frameCount);
        myAnimation.drawAnimation();
    }
}