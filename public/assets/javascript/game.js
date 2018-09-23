var config = {
    type: Phaser.AUTO,
    width: 320,
    height: 240,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {preload: preload,create: create, update:update}
};

var game = new Phaser.Game(config);
//Define global variables(might want to move them into the classes later)

function preload(){}
function create(){}
function update(){}
