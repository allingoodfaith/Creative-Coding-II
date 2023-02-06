//image variables
var image1;
var image2;
var image3;

//font variables
var myFont;

//movement variables 
var moveX = 100;
var moveY = 100;
var xChange = 100;

function preload()
{
        //loads images and fonts in this function
    image1 = loadImage("../images/image1.png");
    image2 = loadImage("../images/image2.png");
    image3 = loadImage("../images/image3.png");
    myFont = loadFont("../fonts/Fathia.tff");
}

function setup()
{
    createCanvas (1500,500);
    setInterval(displayCounter,1000);
}

function draw()
{
    background (212,185,237);

    image(image1,moveX,50,400,400);
    image(image2,550,50,300,400);
    image(image3,1000,50,600,400); 

    drawCounter();

    movement();

    // textFont(myFont);
    textSize(30);
    fill(0);
    text("some of my artwork in recent years",25, 750);
}

function movement()
{
    if(moveX > height-50 || moveW < 0);
    {
        xChange *= -1;
    }
}

function drawCounter()
{
    textSize(50);
    text(counter, 25,25);
}

function displayCounter()
{
    counter++;
}