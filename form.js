class Form {
  constructor() {
    this.heading = createElement("h1");
    this.inputbox = createInput("Enter your name");
    this.register = createButton("register your self");
    this.greting = createElement("h2");
    this.reset = createButton("reset");
  }
  display() {
    this.heading.html("Welcome to the CAAAAAAR racing game");
    this.heading.position(
      displayWidth - displayWidth / 2,
      displayHeight - displayHeight / 1.1
    );
    this.inputbox.position(
      displayWidth - displayWidth / 2,
      displayHeight - displayHeight / 1.3
    );
    this.register.position(
      displayWidth - displayWidth / 2,
      displayHeight - displayHeight / 1.5
    );

    this.register.mousePressed(() => {
      this.inputbox.hide();
      this.heading.hide();
      this.register.hide();
      player.playername = this.inputbox.value();
      this.greting.html("Welcome " + player.playername + ", go play the game");
      playercount = playercount + 1;
      player.playerposition = playercount;
      player.changeplayerState(playercount);
      this.greting.position(
        displayWidth - displayWidth / 2,
        displayHeight - displayHeight / 1.1
      );
      player.playercreate();
    });
    this.reset.position(
      displayWidth - displayWidth / 1.5,
      displayHeight - displayHeight / 1.5
    );
    this.reset.mousePressed(() => {
      player.changeplayerState(0);
      game.changeGameState(0);
      player.writecar(0);
      var ref = database.ref("allplayers");
      ref.remove();
    });
  }
}
