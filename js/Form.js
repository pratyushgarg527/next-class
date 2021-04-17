class Form {

    constructor() {

        this.input = createInput("");

        this.button = createButton('Play');

        this.greettings = createElement('h3')

    }

    display() {
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(325, 100);


        this.input.position(315, 250);


        this.button.position(370, 280);




        this.button.mousePressed(()=> {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount += 1;
            player.update();
            player.updateCount(playerCount);

            this.greettings.html("hello " + player.name)
            this.greettings.position(345, 250)
        })




    }
    hide(){
        this.greettings.hide();
        this.button.hide();
        this.input.hide();
    }
}