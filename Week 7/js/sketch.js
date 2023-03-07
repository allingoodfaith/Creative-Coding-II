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

//points
var points = 0;

//AsciiArt
var MyAsciiArt;
var ascii_width = 1000;
var ascii_height = 1000;
var backgoundimage;
var gfx;
var ascii_arr;
var cyclic_t;

function preload()
{
    idlePaths = loadStrings("../images/idle/idle.txt");
    walkPaths = loadStrings("../images/walk/walk.txt");
    backgroundSound = loadSound("../sounds/music/background music.wav")
    plussound = loadSound("../sounds/sfx/plus point.mp3")
    minussound = loadSound("../sounds/sfx/minus point.mp3")
    backgoundimage = loadImage("../images/asciiartimages/clouds.jpeg")

}

function setup()
{
    createCanvas(1000,1000);
    
    CandyObject = new Candy();
    
    for(var c = 0; c < 10; c++)
    {
        if(i % 2 == 0)
        {
            CandyObject = new Candy (random(20, 950),random(20, 950),random(20,50),235,89,152);    
        }
        else
        {
            CandyObject = new Candy (random(20, 950),random(20, 950),random(20,50),116,35,173);    
        }        
        GumDrop[c] = CandyObject;   
    }  
    //console.log("test" + idlePaths.length)
    myAnimation = new animationImage(idlePaths, 0, 0, 208, 227);
    myWalkAnimations = new animationImage(walkPaths, 0, 0, 208, 227);

    gfx = createGraphics(ascii_height,ascii_width);
    gfx.pixelDenstity(1);
    MyAsciiArt = new MyAsciiArt(this);
    MyAsciiArt.printWeightTable();
    textAlign(CENTER, CENTER); textFont('monospace', 8); textStyle(NORMAL);
    noStroke(); fill(255);
    frameRate(30);

}


function draw()
{
    background(155,222,232);

    cyclic_t = millis() * 0.0002 % images.length;
    gfx.image(images[floor(cyclic_t)], 0, 0, gfx.width, gfx.height);
    gfx.filter(POSTERIZE, 3);
    ascii_arr = myAsciiArt.convert(gfx);
   
    for (var c = 0; c < 20; c++) 
    {
        GumDrop[c].drawCandy();
    
    }

    if(keyIsPressed)
    {
        if(!backgroundSound.isPlaying())
        backgroundSound.loop();    

        if (key == 'd') {
            myWalkAnimations.setCurrentFrameCount(frameCount);
            myWalkAnimations.drawAnimation();
            myWalkAnimations.updatePosition('forward');
            myAnimation.updatePosition('forward'); console.log(GumDrop[0].getX());
            if (myWalkAnimations.isCircleColliding(GumDrop[0])) {
                console.log("ouch")
            }
       
        }
        else if (key == 'w') {
            myWalkAnimations.setCurrentFrameCount(frameCount);
            myWalkAnimations.drawAnimation();
            myWalkAnimations.updatePosition('up');
            myAnimation.updatePosition('up');
        }
        else if (key == 's') {
            myWalkAnimations.setCurrentFrameCount(frameCount);
            myWalkAnimations.drawAnimation();
            myWalkAnimations.updatePosition('down');
            myAnimation.updatePosition('down');
        }
        else if (key == 'a')
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

   for(var i = 0; i < GumDrop.length; i++)
   {
    isColliding = myWalkAnimation.isCircleColliding(GumDrop [i]);
    if(isColliding)
    {
        if(GumDrop[i].getG() == 152)
        {
            points++;
            plussound.Play();
        }
        if(GumDrop[i].getG() == 173)
        {
            points--;
            minussound.Play();
        }
        GumDrop[i] = new Candy (random(20, 50),random(20, 50),random(20,50));    
    }
   }

   textsize(30);
   text("score:" + points, 50,50);
for(var i = 0;i < GumDrop.length; i++)
{
    GumDrop[i].draw();
}

}