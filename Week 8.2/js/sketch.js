var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];

function preload()
{
    idlePaths = loadStrings("./images/idle/idle.txt")
    walkPaths = loadStrings("./images/walk/walk.txt")
}

function setup()
{
    console.log(idlePaths[0]);
    createCanvas(1000, 1000);
    myAnimation = new animationImage2(300, 300, 208, 227);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);
}

function draw()
{
    background(155,222,232);
    
    animation(myAnimation,500,500);
}