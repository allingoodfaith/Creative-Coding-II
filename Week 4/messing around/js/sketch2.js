var Kitty1;
var inputStrings;

function preload() {
  inputStringsIdle = loadStrings("../images/idle/idle.txt");
  inputStringsWalk = loadStrings("../images/walk/walk.txt");
}

function setup() {
  createCanvas(800, 800);

  console.log("THIS SUCKS!!!!!!!!!!! WHY DOES THIS WORK!!!!!!!!!!!!!");
  
  Kitty1 = new catCharacter(inputStringsIdle, inputStringsWalk);
}

function draw(){
  background(255);
  Kitty1.draw(100, 100);
}