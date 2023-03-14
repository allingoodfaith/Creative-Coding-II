class idle
{

    constructor(idleAnimation)
    {
        this.idleAnimation = idleAnimation;
        this.character = [];
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        
    }
    
    getX()
    {
        return this.x;
    }

    setX(x)
    {
        this.x = x;
    }


    draw(i)
    {
        image(this.character[i], this.x, this.y, this.w, this.h);
        //console.log("testA")
    }

    animate()
    {
        for(var j = 0; j <this.idleAnimation.length; j++)
           {
            person = loadImage(this.idleAnimation[j]);
            this.character[j] = person;
           } 
    }
    
}