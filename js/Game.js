class Game {

    constructor() {

    }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })
    }

    updateState(state) {
        database.ref('/').update({
            gameState: state
        })
    }

    start() {
        if (gameState === 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    play() {
        form.hide()
        textSize(30)
        textFont("jokerman")
        text("Game Start", 325, 200)
        Player.getPlayerInfo()
        if (allPlayers !== undefined) {

            var display = 230

            for (var plr in allPlayers) {

                display = display + 30
                text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 300, display)

                if (plr === "player" + player.index) {

                    fill("red")


                }
                else {
                    fill("black")

                }
            }

        }
        if (keyDown(UP_ARROW) && player.index !== null) {

            player.distance += 150
            player.update()

        }

    }
}