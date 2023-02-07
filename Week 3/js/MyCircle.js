class MyCircle{

    //constructor
        //builder
        //gets called once
    constructor(x,y,diameter)
    {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
    }
    //properties

    //functions
        //no need for using 'function' tag 
    drawCircle() 
    {
        circle(this.x,this.y,this.diameter);
    }
}