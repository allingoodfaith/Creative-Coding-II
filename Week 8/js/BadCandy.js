class BadCandy
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.diameter = 50;
    }

    drawCandy()
    {
        noStroke();
        fill(109,32,168);
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
}