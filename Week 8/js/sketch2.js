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
    backgroundSound = loadSound("../sounds/music/background music.wav")
    plussound = loadSound("../sounds/sfx/plus point.mp3")
    minussound = loadSound("../sounds/sfx/minus point.mp3")
}

function setup()
{
   // console.log(idlePaths[2]);
    createCanvas(1000, 1000);
    myAnimation = new animationImage2(300, 300, 208, 227);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);

    GoodCandyObject = new GoodCandy();
    for(var c = 0; c < 5; c++)
    {
        GoodCandyObject = new GoodCandy (random(50, 900),random(50, 900)); 
        GumDrop1[c] = GoodCandyObject;   
    }

    BadCandyObject = new BadCandy();
    for(var c = 0; c < 5; c++)
    {
        BadCandyObject = new BadCandy (random(50, 900),random(50, 900)); 
        GumDrop2[c] = BadCandyObject;   
    }
}

function draw()
{
    background(155,222,232);

    //drawboundary(10,10);

    for (var c = 0; c < 5; c++) 
    {
        GumDrop1[c].drawCandy();
        GumDrop2[c].drawCandy();
        //console.log("test")
    }

    if(kb.press)
    {
        !backgroundSound.isPlaying()
        backgroundSound.loop();  
    }

    if(kb.pressing('d'))
    {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');
        if(myAnimation.isColliding(GoodCandyObject,BadCandyObject))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updateAnimation('idle');
        }
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

    /*for(var i = 0; i < GumDrop1.length; i++)
    {
    isColliding = myAnimation.isColliding(GumDrop1 [i]);
    if(isColliding)
    {
        points++;
        plussound.Play();
        GoodCandyObject = new GoodCandy (random(50, 900),random(50, 900)); 
    }
    }

    for(var i = 0; i < GumDrop2.length; i++)
    {
     isColliding = myAnimation.isColliding(GumDrop2 [i]);
     if(isColliding)
    {
        health--;
        minussound.Play();
        BadCandyObject = new BadGoodCandy (random(50, 900),random(50, 900)); 
    }
   }*/
}