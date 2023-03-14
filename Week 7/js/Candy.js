class Candy
{

    constructor(x,y,diameter)
    {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.r = r;
        this.b = b;
        this.g = g;
    }

    drawCandy()
    {
        noStroke();
        //fill(235,89,152);
        circle(this.x,this.y,this.diameter);
        fill(this.r, this.g, this.b); 
    }

    getX()
    {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getdiameter() {
        return this.diameter;
    }

    getR()
    {
        return this.r;
    }
   
    getB()
    {
        return this.b;
    }

    getG()
    {
        return this.G;
    }
}