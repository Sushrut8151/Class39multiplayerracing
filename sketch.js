var car1, car2 ,car3,car4;
var redcarImg, greencarImg , bluecarImg , orangecarImg;
var racetrackImg;
var cars;
var canvas,backgroundImg;
var database;
var form , player , game;
var allPlayers;
var distance = 0;
var gameState = 0;
var playerCount;
function preload(){
  redcarImg = loadImage("Images/redCar.jpg");
  bluecarImg = loadImage("Images/blueCar.jpg");
  greencarImg = loadImage("Images/greenCar.jpg");
  orangecarImg = loadImage("Images/orangeCar.jpg");
  racetrackImg = loadImage("Images/track.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20 ,displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function draw(){
if (playerCount === 4){
  game.update(1);
}
if(gameState === 1){
  clear();
  game.play();
}
}

