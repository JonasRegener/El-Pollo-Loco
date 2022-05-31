class BackgroundObject extends MovableObject {

    width = 720;
    height = 480;
    distance = 1;
    
    constructor(imagePath, x, distance = 1) {
        super().loadImage(imagePath);
        this.x = x;
        this.distance = distance;
        this.y = 480 - this.height; // max height - height pic

    }

}