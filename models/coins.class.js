class Coins extends MovableObject {
//
energy = 1;

    constructor(){
        super().loadImage('img/6.botella/1.Marcador.png');
        this.x = 500;
        this.y = 100;
        this.height = 200;
        this.width = 200;
    
        
    }

 /*   drawCoins() {
        this.coins.forEach(coin => {
            this.ctx.drawImage(coin.img, coin.x, coin.y, coin.width, coin.height);
        });
        this.coins.forEach(function(item, index, object) {
            if (item.energy <= 0) {
                object.splice(index, 1);
            }
        });
    }
 in world implementieren  */  
}