class Candy
{

    constructor(x,y,diameter)
    {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
    }

    drawCandy()
    {
        noStroke();
        fill(235,89,152);
        circle(this.x,this.y,this.diameter); 
    }

}