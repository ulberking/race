class Game {
  constructor() {}
  readGameState() {
    var gameref = database.ref("gamestate");
    gameref.on("value", function (data) {
      gamestate = data.val();
    });
  }
  changeGameState(gs) {
    database.ref("/").update({
      gamestate: gs,
    });
  }
  startgame() {
    player.readplayer();
    player.readcar();
    form.heading.hide();
    form.inputbox.hide();
    form.register.hide();
    form.greting.hide();
    var i = 0;
    var h = 650;
    image(track,0,-displayHeight*9,displayWidth,displayHeight*10)
    for (var p in readall) {
      //console.log(readall[p].playername,readall[p].playerdistance)
      array[i].x = h;
      array[i].y = displayHeight - readall[p].playerdistance;
      if(i+1==player.playerposition){
        camera.position.x=displayWidth/2
        camera.position.y = array[i].y
      }
      i = i + 1;
      h = h + 250;
    }
    if (keyDown("UP_ARROW")) {
      player.playerdistance = player.playerdistance + 50;
      player.playercreate();
    }
    if(player.playerdistance>=8200){
    var x = carend + 1
    player.playerrank=x
    player.writecar(x)
    gamestate = 2
    }
    drawSprites();
  }
  displayrank(){
  alert(player.playername+" got a rank of "+player.playerrank)
  }
}
