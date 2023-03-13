class animationImage
{
    constructor(filesNames, x, y, w, h)
    {
        this.filesNames = filesNames;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imageObject = [];
        this.loadAnimation();
        this.i = 0;
        this.currentframeCount = 0;
        this.direction = "";
    }

    getX()
    {
        return this.x;
    }
    
    setX()
    {
        this.x = x;
    
    }

    setCurrentFrameCount(currentframeCount)
    {
        this.currentframeCount = currentframeCount;
    }

    loadAnimation()
    {
        for(var i = 0; i < this.filesNames.length; i++)
        {
            this.imageObject[i] = loadImage(this.filesNames[i]);
        }
    }

    drawAnimation()
    {
        this.incrementIndex();
        if(this.direction == "reverse")
        {
            push();
            translate(this.w, 0);

            scale(-1.0, 1.0);
            image(this.imageObject[this.i], -this.x, this.y, this.w, this.h);
            pop();
        }
        else
        {
            //console.log(this.x)
            image(this.imageObject[this.i], this.x, this.y, this.w, this.h);
        }
    }

    incrementIndex()
    {
        if(this.currentframeCount % 5 == 0)
        {
            this.i++
        }
        if(this.i >= this.filesNames.length)
        {
            this.i = 0;
        }
    }

    updatePosition(direction)
    {
        this.direction = direction;
        if(direction == "forward")
        {
            this.x += 3;
        }
        else if(direction == "reverse")
        {
            this.x -=3;
        }
        if (direction == "up") {
            this.y -= 3;
        }
        else if (direction == "down")
        {
            this.y += 3;
        }
    }

    isCircleColliding(GumDrop)
    {
        return collideRectCircle(this.x, this.y, this.diameter, this.h, this.w, GumDrop.getX(), GumDrop.getY(), GumDrop.getdiameter());

        
    }
}

