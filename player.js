class Player {
  constructor() {
    this.playername = "";
    this.playerdistance = 0;
    this.playerposition = null;
    this.playerrank = null;
  }
  readplayerState() {
    var playerref = database.ref("playercount");
    playerref.on("value", function (data) {
      playercount = data.val();
    });
  }
  changeplayerState(pc) {
    database.ref("/").update({
      playercount: pc,
    });
  }
  playercreate() {
    var parent = "allplayers/player" + this.playerposition;
    database.ref(parent).set({
      playername: this.playername,
      playerdistance: this.playerdistance,
    });
  }
  readplayer() {
    var reader = database.ref("allplayers");
    reader.on("value", function (data) {
      readall = data.val();
    });
  }
  readcar(){
    var reader = database.ref("carsatend");
    reader.on("value", function (data) {
      carend = data.val();
    });
  }
  writecar(nb){
    database.ref("/").update({
      carsatend: nb,
    });
  }
}
