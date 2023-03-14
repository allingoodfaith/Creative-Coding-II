var GingerbreadGirl;
var inputStrings;

function preload()
{
  inputStringsIdle = loadStrings("../images/idle/idle.txt");
  inputStringsWalk = loadStrings("../images/walk/walk.txt");
}

function setup()
{
  createCanvas(800, 800);

  console.log("THIS SUCKS!!!!!!!!!!! WHY DOES THIS WORK!!!!!!!!!!!!!");
  
  GingerbreadGirl = new character(inputStringsIdle, inputStringsWalk);
}

function draw()
{
  background(255);
   .draw(100, 100);
}