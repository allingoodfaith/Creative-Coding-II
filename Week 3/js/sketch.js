//image variables
var image1;
var image2;
var image3;

//font variables
var myFont;

//movement variables 
var moveX = 100;
var moveY = 50;
var xChange = 100;

//counter variable
var counter = 0;

function preload()
{
    //loads images and fonts in this function
    image1 = loadImage("./images/image1.png");
    image2 = loadImage("./images/image2.png");
    image3 = loadImage("./images/image3.png");
    myFont = loadFont("./fonts/CaviarDreams.tff");
}

function setup()
{
    createCanvas (1675,500);
    setInterval(displayCounter,1000);
}

function draw()
{
    background (212,185,237);

    drawCounter();
    
    image(image1,moveX,moveY,400,400);
    image(image2,550,50,275,400);
    image(image3,875,50,675,400); 
    
    movement();

    textFont(myFont);
    textSize(5);
    fill(0);
    text("some of my artwork in recent years",25, 750);
}

function movement()
{
    if(moveX > height-0 || moveY < 0);
    {
        xChange *= -1;
    }
    moveX *= moveY;
}

function drawCounter()
{
    textSize(20);
    text(counter, 50,25);
}

function displayCounter()
{
    counter++;
}