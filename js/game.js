let canvas;
let world;
let keyboard = new Keyboard();


function init() {

    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);



    console.log('My Character is', world.character);

}

window.addEventListener('keydown', e => {

    if (e.key === "ArrowUp") {
        keyboard.UP = true;
    }
    if (e.key === "ArrowDown") {
        keyboard.DOWN = true;
    }
    if (e.key === "ArrowRight") {
        keyboard.RIGHT = true;
    }
    if (e.key === "ArrowLeft") {
        keyboard.LEFT = true;
    }
    if (e.code === "KeyD") {
        keyboard.D = true;
    }
 //   console.log(e)
});

window.addEventListener('keyup', e => {
    if (e.key === "ArrowUp") {
        keyboard.UP = false;
    }
    if (e.key === "ArrowDown") {
        keyboard.DOWN = false;
    }
    if (e.key === "ArrowRight") {
        keyboard.RIGHT = false;
    }
    if (e.key === "ArrowLeft") {
        keyboard.LEFT = false;
    }
    if (e.code === "KeyD") {
        keyboard.D = false;
    }
});