//var for animation
var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];


//var for candys 
var GumDrop1 = [];
var GumDrop2 = [];
var GoodCandyObject;
var BadCandyObject;
var c = 0; 
var circleR = 20;

//health 
var health = 100;

//points
var points = 0;

function preload()
{
    idlePaths = loadStrings("../images/idle/idle.txt");
    walkPaths = loadStrings("../images/walk/walk.txt");
}

function setup()
{
   // console.log(idlePaths[2]);
    createCanvas(1000, 1000);
    myAnimation = new animationImage2(300, 300, 208, 227);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);

    GoodCandyObject = new GoodCandy();
    for(var c = 0; c < 3; c++)
    {
        GoodCandyObject = new GoodCandy (random(50, 900),random(50, 900)); 
        GumDrop1[c] = GoodCandyObject;   
    }

    BadCandyObject = new BadCandy();
    for(var c = 0; c < 3; c++)
    {
        BadCandyObject = new BadCandy (random(50, 900),random(50, 900)); 
        GumDrop2[c] = BadCandyObject;   
    }
}

function draw()
{
    background(155,222,232);

    for (var c = 0; c < 3; c++) 
    {
        GumDrop1[c].drawCandy();
        GumDrop2[c].drawCandy();
        //console.log("test")
    }

    if(kb.pressing('d'))
    {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');
        /*if(myAnimation.isColliding())
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updateAnimation('idle');
        }*/
    }
    else if(kb.pressing('a'))
    {
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');
    }
   else if(kb.pressing('s'))
    {
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk');
    }
    else if(kb.pressing('w'))
    {
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('walk');
    }
    else
    {
        myAnimation.drawAnimation('idle');
    }
}