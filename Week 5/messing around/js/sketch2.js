var GingerBreadGirl;
var inputStrings;

function preload() {
  inputStringsIdle = loadStrings("../images/idle/idle.txt");
  inputStringsWalk = loadStrings("../images/walk/walk.txt");
}

function setup() {
  createCanvas(800, 800);

  console.log("THIS SUCKS!!!!!!!!!!! WHY DOES THIS WORK!!!!!!!!!!!!!");
  
  GingerBreadGirl = new Character(inputStringsIdle, inputStringsWalk);
}

function draw(){
  background(255);
  GingerBreadGirl.draw(100, 100);
}