//variables

var counter = 0;

//vairables for character 
var person;
var character = [];
var idleAnimation = [];
var i = 0;
var IdleObject;
var WalkObject;
var walkAnimation;
var idlecharacter;
var walkcharacter;

//variable for candy
var GumDrop = [];
var CandyObject;
var c = 0; 
var circleR = 20;

function preload()
{
    idleAnimation = loadStrings ("../images/idle/idle.txt");
    walkAnimation = loadStrings("../images/walk/walk.txt");
    console.log("i tried my best¯\_(ツ)_/¯")
}

function setup()
{
    createCanvas(500,500);
    setInterval(displayCounter, 50);
    
    CandyObject = new Candy();
    //IdleObject.animate();

    IdleObject = new idle(idleAnimation, 200,200,208,227); 
    idlecharacter.animate(); 

    WalkObject = new idle(walkAnimation, 200,200,208,227); 
    idlecharacter.animate();

    for(var c = 0; c < 3; c++)
    {
        CandyObject = new Candy (random(20, 500),random(20, 500),random(20,150)); 
        GumDrop[c] = CandyObject;   
    }  
}


function draw()
{
    background(155,222,232);
   
    for (var c = 0; c < 3; c++) 
    {
        GumDrop[c].drawCandy();
        //console.log("test")
    }

    movementGGB();

    //IdleObject.draw(i);
}

function movementGGB()
{
    if(keyIsPressed)
    {
        if(key =='d')
        {
            walkAnimation.draw(i);
            walkAnimation.setX(walkAnimation.getX()+5);
            walkAnimation.setX(idleAnimation.getX()+5);
        }
        else if(key == 'a')
        {
            walkAnimation.draw(i);
            walkAnimation.setX(walkAnimation.getX()-5);
            walkAnimation.setX(idleAnimation.getX()-5);
        }
        else
        {
            idlecharacter.draw(i);
        }
    }
    else
    {
        idlecharacter.draw(i);
    }
}

function displayCounter()
{
    counter++;

    i++;
    if (i > 15) {
        i = 0;
    }
}