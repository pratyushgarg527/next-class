var ball, database, position;
var form, player, game;
var allPlayers;
var gameState = 0
var playerCount = 0

function setup() {
    database = firebase.database();
    createCanvas(500, 500);
    game = new Game();
    game.getState();
    game.start();

}

function draw() {
    background("white");

    if(playerCount === 4){

        game.updateState(1)

    }
    if(gameState === 1){

        game.play()

    }

    drawSprites();
}



