//variables

var person;
var character = [];
var idleAnimation = [];
var i = 0;
var IdleObject;

function preload()
{
    idleAnimation = loadStrings ("../images/idle/idle.txt");
}

function set()
{
    createCanvas(500,500);
    setInterval(displayCounter, 50);
    IdleObject = new idle(idleAnimation);

    IdleObject.animate();
}

function draw()
{
    background(155,222,232);

    IdleObject.draw(i);
}

function displayCounter();
{
    counter++;

    i++;
    if (i > 16) {
        i = 0;
    }
}