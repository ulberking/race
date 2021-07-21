var ball, database, xyposition, form, game, player;
var gamestate = 0;
var playercount = 0;
var readall, car1, car2, track, carr1, carr2,carend = 0
var array = [];
function preload() {
  car1 = loadImage("car3.png");
  car2 = loadImage("car4.png");
  track = loadImage("track.jpg");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.readGameState();
  if (gamestate == 0) {
    player = new Player();
    player.readplayerState();
    form = new Form();
    form.display();
  }
  carr1 = createSprite(200, 400, 40, 40);
  carr2 = createSprite(500, 400, 80, 90);
  carr1.addImage(car1);
  carr2.addImage(car2);
  array.push(carr1);
  array.push(carr2);
}

function draw() {
  background("white");
  if (playercount == 2) {
    game.changeGameState(1);
  }
  if (gamestate == 1) {
    game.startgame();
  }
  if (gamestate == 2) {
    game.displayrank();
  }
}
