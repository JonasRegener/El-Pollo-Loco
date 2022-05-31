class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new Statusbar();
    throwableObject = [];
    coins = new Coins();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }
    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.checkCollisionsWithCollectables();
        }, 200);
    }
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy)
            }
        });
    }


    checkCollisionsWithCollectables() {
        this.level.coins.forEach((coins) => {
            if (this.character.isColliding(coins)) {
    //         this.character.collect();
            
            }
        });
    } 

    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100)
            this.throwableObject.push(bottle);
        }
    }

    draw() {

        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(this.camera_x, 0);


        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        // Space for fixed Objects eg StatusbarS

        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);
        // ^^ Space for fixed Objects ^^
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObject);
        this.addObjectsToMap(this.level.enemies);
        // Zeichnen vorbei
        this.ctx.translate(-this.camera_x, 0);


        // Ruft sich immer wieder selbst auf Trick 17.
        let self = this;

        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        if (mo instanceof BackgroundObject) {
            this.ctx.translate(this.camera_x * mo.distance, 0);
        }


        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
        if (mo instanceof BackgroundObject) {
            this.ctx.translate(-this.camera_x * mo.distance, 0);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * - 1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * - 1;
        this.ctx.restore();
    }
}