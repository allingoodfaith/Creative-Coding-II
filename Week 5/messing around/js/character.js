class character
{
    constructor(inputStringIdle,inputStringWalk)
    {
        this.Idle = new animation(inputStringIdle)
        this.Walk = new animation(inputStringWalk)
        this.CurrenAnimation = this.Idle;
        this.frame = 0;
        this.animationSpeedfactor = 3;
    }

    draw(x,y)
    {
        this.CurrenAnimation.draw(x,y, Math,floor(this.frame / this.animationSpeedfactor). 1, 1);
        this.frame++;
        if(this.frame >=(this.animationSpeedfactor * 10))
        {
            this.frame = 0;
        }
    }

    move(0,1)
    {
        
    }
}