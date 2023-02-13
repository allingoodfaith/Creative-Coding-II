//variables

var counter = 0;

var person;
var character = [];
var idleAnimation = [];
var i = 0;
var IdleObject;


var GumDrop = [];
var CandyObject;
var c = 0; 
var circleR = 20;

function preload()
{
    idleAnimation = loadStrings ("../images/idle/idle.txt");
    //console.log("test")
}

function setup()
{
    createCanvas(500,500);
    setInterval(displayCounter, 50);

        
    CandyObject = new Candy();
    //IdleObject.animate();

    IdleObject = new idle(idleAnimation);  

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

    IdleObject.draw(i);
}

function displayCounter()
{
    counter++;

    i++;
    if (i > 15) {
        i = 0;
    }
}