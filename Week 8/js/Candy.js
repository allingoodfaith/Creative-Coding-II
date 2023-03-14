class Candy
{
    constructor(x,y,diameter,r,b,g)
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
        fill(this.r, this.g, this.b);
        circle(this.x,this.y,this.diameter); 
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

    getG() {
        return this.g;
    }
}