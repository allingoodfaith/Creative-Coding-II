var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];

function preload()
{
    idlePaths = loadStrings("./images/idle/idle.txt");
    walkPaths = loadStrings("./images/walk/walk.txt");
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

    if(kb.pressing('d'))
    {
        myAnimation.updatePosition('foward');
        myAnimation.drawingAnimation('walk');
        if(myAnimation.iscolliding())
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updateAnimation('idle');
        }
    }
    else if(kb.pressing('d'))
    {
        myAnimation.updatePosition('reverse');
        myAnimation.drawingAnimation('walk');
    }
   /*else if(kb.pressing('w'))
    {
        myAnimation.updatePosition('up');
        myAnimation.drawingAnimation('walk');
    }
    else if(kb.pressing('s'))
    {
        myAnimation.updatePosition('down');
        myAnimation.drawingAnimation('walk');
    }*/
    else
    {
        myAnimation.drawAnimation('idle');
    }
}