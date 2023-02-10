class idle
{

    constructor(idleAnimation)
    {
        this.idleAnimation = idleAnimation;
        this.character = [];
    }

    draw(i)
    {
        image(this.character[i], 100 ,100, 208, 227);
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