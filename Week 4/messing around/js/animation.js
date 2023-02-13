class Animation
{
    constructor(stringInput)
    {
        this.strings = stringInput;
        this.animationImg = [];
        for (var i = 0; i < this.strings.length; i++)
        {
            this.animationImg[i] = loadIamge(this.strings[i]);
        }
    }

    draw(x, y, frame, widthScale, heightScale)
    {
        Image(this.animationImg[frame] x, y, 100 * widthScale, 100 * heightScale)
    }
}