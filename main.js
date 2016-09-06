var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var newBoard = document.getElementById("game-board");
function createBoard (newBoard) {
for (i = 0; i < cards.length; i++) {
    var newCard = document.createElement('div');
    newCard.className = "card";
    newCard.setAttribute('data-card', cards[i]);
    newCard.addEventListener('click', isTwoCards);
    newBoard.appendChild (newCard);
}
}

function isTwoCards(cards) {
  cardsInPlay.push(this.getAttribute('data-card'));
  if (this.getAttribute('data-card')=== "king") {
    this.innerHTML = '<img src="king-37155_1280.png" />';
  }
  else {
    this.innerHTML = '<img src="queen-37156_1280.png" />';
  }
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch() {
  if (cardsInPlay[0]===cardsInPlay[1]) {
    alert ("You found a match!");
  } else {
    alert ("Sorry, try again.");
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
