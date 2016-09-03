var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
var newBoard = document.getElementById("game-board");
function createBoard (newBoard) {
for (i = 0; i < 4; i++) {
    var newCard = document.createElement('div');
    newCard.className = "card";
    newBoard.appendChild (newCard);
}
}
createBoard (newBoard);
/*if (cardOne === cardTwo) {
    alert ("You found a match!");
} else {
    alert ("Sorry, try again.");
}
if (cardThree === cardFour) {
    alert ("You found a match!");
} else {
    alert ("Sorry, try again.");
}
if (cardTwo === cardFour) {
    alert ("You found a match!");
} else {
    alert ("Sorry, try again.");
}
if (cardOne === CardThree) {
    alert ("You found a match!");
} else {
    alert ("Sorry, try again.");
}*/
