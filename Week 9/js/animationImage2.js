class animationImage2 {

    constructor( x, y, w, h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imageObjects = [];
        this.currentAnimation;
        this.createAnimation(); // new function
        this.i = 0;
        this.currentFrameCount = 0;
        this.direction  = "";
        this.GoodCandyObject;
        this.BadCandyObject;      
    }

    getX() 
    {
        return this.x;
    }

    setX(x) 
    {
        this.x = x;
    }

    setCurrentFrameCount(currentFrameCount) 
    {

        this.currentFrameCount = currentFrameCount;
    }

    createAnimation() {
        this.currentAnimation = createSprite(this.x, this.y);
    }

    loadAnimation(animationType, fileNames) {
        this.currentAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length - 1]);
        // set the hit box
        this.currentAnimation.width = 208;
        this.currentAnimation.height = 227;
    }

    drawAnimation(animationType) {
        
        this.currentAnimation.frameDelay = 5;
        this.currentAnimation.scale = .5;
        this.currentAnimation.changeAnimation(animationType);
        if (animationType == 'walk' && this.direction == 'forward') {
            this.currentAnimation.direction = 0;
            this.currentAnimation.mirror.x = false;
            this.currentAnimation.speed = 1;

        }
        else if (animationType == 'walk' && this.direction == 'reverse') {

            this.currentAnimation.mirror.x = true;
            this.currentAnimation.direction = 180;
            this.currentAnimation.speed = 1;
        }

        else if (animationType == 'walk' && this.direction == 'up') {

                this.currentAnimation.mirror.x = false;
                this.currentAnimation.direction = 90;
                this.currentAnimation.speed = 1;
        }

        else if (animationType == 'walk' && this.direction == 'down') {

                this.currentAnimation.mirror.x = true;
                this.currentAnimation.direction = 270;
                this.currentAnimation.speed = 1;       
         
        
        }
        else {
            this.currentAnimation.velocity.x = 0;
            this.currentAnimation.velocity.y = 0;
        }


    }

    incrementIndex() {

        if (this.currentFrameCount % 5 == 0) {
            this.i++;
        }

        if (this.i >= this.fileNames.length) {
            this.i = 0;
        }
    }

    updatePosition(direction) {
        this.direction = direction;
       
    }

    isColliding(boundaries) {
        return this.currentAnimation.collide();
    }

    isColliding(GoodCandyObject,BadCandyObject) {
        return this.currentAnimation.collide();
    }

}