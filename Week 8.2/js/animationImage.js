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
}

getX() 
{
    return this.x;
}

setX() 
{
    this.x = x;
}

createAnimation()
{
    this.currentAnimation = createSprite(300, 250);
}


loadAnimation(animationType,fileNames)
{ 
    this.currentAnimation.addAnimation(animationType,fileNames[0], fileNames[fileNames.length-1]);
       
}

drawAnimation(animationType) {
        
    this.currentAnimation.frameDelay = 5;
    this.currentAnimation.scale = .5;
}

incrementIndex() {

    if (this.currentFrameCount % 5 == 0) {
        this.i++;
    }

    if (this.i >= this.fileNames.length) {S
        this.i = 0;
    }
}

updatePosition(direction) {
    this.direction = direction;
   
}

isColliding(myImage) {
    return this.currentAnimation.collide(myImage);
}

}