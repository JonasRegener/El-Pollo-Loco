class MovableObject extends DrawableObject {
    speed = 0.12;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastHist = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0)
                this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }, 1000 / 25)
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) { // ThrowableObjects can fall now
            return true;
        } else {
            return this.y < 137;
        }
    }



        playAnimation(images) {
            let i = this.currentImage % images.length; // Hier als Bsp 0 /6 1/6 2/6 es wird immer mit dem Rest gearbeitet 0 1 2 3 4 5 und widerholt sich dann 0 1 2 3 4 5;
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }



        // Checks if enemy isColliding with Char
        isColliding(mo) {
            return this.x + this.width > mo.x &&
                this.y + this.height > mo.y &&
                this.x < mo.x &&
                this.y < mo.y + mo.height;

        }

        hit() {
            this.energy -= 5;
            if (this.energy < 0) {
                this.energy = 0;
            } else {
                this.lastHit = new Date().getTime();
            }
        }

/*        collect() {
            this.coins.energy = 0;
        } */

        isHurt() {
            let timepassed = new Date().getTime() - this.lastHit; // In MS
            timepassed = timepassed / 1000; // Difference in s
            return timepassed < 0.7;

        }

        isDead() {
            return this.energy == 0;
        }
        moveRight() {
            this.x += this.speed;

        }

        moveLeft() {
            this.x -= this.speed;


        }

        jump() {
            this.speedY = 20;
        }

    }
