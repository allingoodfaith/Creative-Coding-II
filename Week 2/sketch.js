  var x = 100;
  var y = 100;
  var side = 50;
  var Xside = 50;
  var Yside = 50;


function setup() 
{
  createCanvas(400, 400);
  
}

function draw() 
{
  background(300);
  fill(230,201,99);
  triangle(100, 50, 300, 50, 200, 350,);
  fill(168,61,42);
  circle(250, 80, 30);
  circle(180, 200, 30);
  circle(210, 150, 30);
  circle(150, 80, 30);
  circle(200, 280, 30 );
  
  fill(75,100,29);
    for(var i = 0; i < 5; i++)
      {
        rect(Xside,Yside,side);
        Xside+=random(5);
        Yside+=random();
      }
  
  textSize (20);
  fill(31,31,31); 
  text("Grete", 250, 350);
  
  textSize (20);
  fill(31,31,31);
  text("Pizza", 20, 20);
  
  fill (186,141,217);
  square(x,y,20);
  if(keyIsPressed)
  {
    if(key == 'a')
    {
        x-=5;
    }

    else if(key == 'd')
    {
        x+=5;
    }
    else if(key == 'w')
    {
        y-=5;
    }
    else if(key == 's')
    {
        y+=5;
    }
  }
        
}


