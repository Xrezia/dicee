var playerTwoRandom;
var playerOneRandom;

playerOneRandom = Math.random();
playerTwoRandom = Math.random();

playerOneRandom = Math.floor((playerOneRandom * 6) + 1);
playerTwoRandom = Math.floor((playerTwoRandom * 6) + 1);

function gameWinner(){
  if (playerOneRandom > playerTwoRandom){
    document.querySelector("h1").innerHTML = "Player One Wins";
  }
  else if (playerOneRandom == playerTwoRandom) {
    document.querySelector("h1").innerHTML = "DRAW";
  }
  else{
    document.querySelector("h1").innerHTML = "Player Two Wins";
  }
}

function playerOneImage(){
  if (playerOneRandom == 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
  }
  if (playerOneRandom == 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
  }
  if (playerOneRandom == 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
  }
  if (playerOneRandom == 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
  }
  if (playerOneRandom == 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
  }
  if (playerOneRandom == 6) {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
  }
}

function playerTwoImage(){
  if (playerTwoRandom == 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  }
  if (playerTwoRandom == 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
  }
  if (playerTwoRandom == 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
  }
  if (playerTwoRandom == 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
  }
  if (playerTwoRandom == 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
  }
  if (playerTwoRandom == 6) {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  }
}


gameWinner();
playerOneImage();
playerTwoImage();
