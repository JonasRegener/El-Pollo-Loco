class Chicken extends MovableObject {

    height = 65;
    width = 65;
    y = 370;


    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/ChickenImage/1.png',
        'img/3.Secuencias_Enemy_básico/ChickenImage/2.png',
        'img/3.Secuencias_Enemy_básico/ChickenImage/3.png'

    ]
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/ChickenImage/1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 2000;
        this.speed = 0.2 + Math.random() * 0.25
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);    

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);

        }, 200);


    }

}