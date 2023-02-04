//image variables
var image1;
var image2;
var image3;

//font variables
var myFont;

//movement variables 
var moveX = 100;
var moveY = 100;

function preload()
{
        //loads images and fonts in this function
    image1 = loadImage("../image1.png");
    image2 = loadImage("../image2.png");
    image3 = loadImage("../image3.png");
    myFont = loadFont("../fonts/AntipastoPro_trial.tff");
}

function setup()
{
    createCanvas (500,1500);
    setInterval(displayCounter,1000);
}

function draw()
{
    background (212,185,237);

    image(image1,moveX,100,200,200);
    image(image2,100,500,100,200);
    image(image3,100,1000,100,100); 

    drawCounter();


    textFont(myFont);
    textSize(30);
    fill(0);
    text("some of my artwork in recent years",25, 750);
}

function movement()
{
    if(moveX > width-);
}

function drawCounter()
{
    textSize(50)
    text(counter, 25,25);
}

function displayCounter()
{
    counter++;
}