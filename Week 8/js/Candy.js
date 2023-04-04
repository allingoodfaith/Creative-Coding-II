class Candy
{
    constructor(x,y,r,b,g)
    {
        this.x = x;
        this.y = y;
        this.diameter = 50;
        this.r = r;
        this.b = b;
        this.g = g;
        //this.candy = candy;
    }

    drawCandy()
    {
        noStroke();
        fill(this.r,this.b,this.g);
        circle(this.x,this.y,this.diameter); 
    }

    createCandy()
    {
        Candy = createSprite(this.drawCandy);
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