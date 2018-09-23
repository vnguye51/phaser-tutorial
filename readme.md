## Setting up Phaser on your server

* Use the folder tree defined below(or adapt your own)
root
|
|---server.js
|---assets
|   |---javascript
|       |---game.js
|       |---phaser.js
|   |---index.html



* The first step is to setup Phaser on your computer. Download the phaser package and store it as phaser.js defined above.

* Next create an index.html file inside /assets and fill it with a generic html template.

<!DOCTYPE html>
<html lang = 'en-us'>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rpg</title>
</head>

<body>
</body>

* In the <head> of the html link the phaser library

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rpg</title>
    <script src="assets/javascript/phaser.js"></script>
</head>

* Now create a "game.js" file in /assets/js 
* The game.js file should be filled with the Phaser boilerplate 

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

* and link it at the bottom of the <body>
<html lang = 'en-us'>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rpg</title>
</head>

<body>
    <script type='text/javascript' src='assets/javascript/game.js'></script>
</body>

* Now create server.js in the root directory 
* Fill it with the generic server boilerplate

// Dependencies
var express = require("express");
// Create an instance of the express app.
var app = express();
var server = require('http').Server(app);

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 4040;

app.use(express.static(__dirname + '/public'));
//Allow static files in the public folder to be retrieved from server

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

* Now install the necessary packages through npm. For now we'll only need express. Remember to npm init and use a .gitignore if you intend to use git.

* Now run the server. If everything worked correctly you should have no errors in your console and a black box should appear when you connect to your server.


## Phaser basics
* Let's list out our goals: 
    * Draw an enemy and a player onto the screen
    * give the player some basic controls
    * Create a collision event between the two

* There are three basic functions which we used to define our scene. 
    * Preload - Preload is used for loading images and files into memory
    * Create - Create is called once immediately before the scene is instanced into the game. Events and callbacks are usually defined here
    * Update - The update function is called once per frame. Player input and AI updates are usually placed here


### Drawing
* The first step to drawing an image is to load the image.
    * We'll use scene.load.image to bring the file into memory. Generally, this inside preload,create, and update refers to the current scene.
    * So, inside preload() add:
            this.load.image('player','assets/CharacterSprites/Player_arrow.png')
    load.image() takes two arguments: The "name" of the image with which you will use to call the image(similar to a variable, but this will make more sense later) and the filepath.
* Now that our image is loaded we need to add it to the scene.
    * To do that inside create() add:
        player = this.physics.add.sprite(8,8,'player')
    physics.add.sprite takes three arguments (x,y,reference)
        
    * x and y are the coordinates to place the sprite where (0,0) is the topleft corner with y increasing in the down direction and x increasing in the right direction.

    * reference is the string we used to define the image when we loaded it into the game.

* If we run our game now we should see a box drawn on the screen.
