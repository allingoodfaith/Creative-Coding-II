var idlePaths = [];
var myAnimation;
var myWalkAnimations; 
var walkPaths = [];

var health = 100; 
var points = 0;


function preload()
{
    idlePaths = loadStrings("../images/idle/idle.txt");
}

function setup()
{
    createCanvas(1000,1000)
    myAnimation = new animtionImage(idlePaths,);
}

function draw()
{
    background(155,222,232);
    myAnimation.updatePosition('idle');
    myAnimation.setCurrentFrameCount(frameCount);
    myAnimation.drawAnimation();
}