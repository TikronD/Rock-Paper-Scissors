// for player 1 the keys a,s & d would represent rock paper & scissors
// for player 2 the keys j,k & l would represent rock paper & scissors

// when a player clicks one of the keys, listen to the event, and update a global variable showing that players choice

// when both players have selected a key, then show the iamges and who has won

const KEY_HANDLERS = {
  firstPlayer: {
    a: {
      message: "Player 1 chose rock",
      choice: "rock",
      imageUrl: "images/rock.jpg",
    },
    s: {
      message: "Player 1 chose paper",
      choice: "paper",
      imageUrl: "images/paper.jpg",
    },
    d: {
      message: "Player 1 chose scissors.",
      choice: "scissors",
      imageUrl: "images/scissors.jpg",
    },
  },
  secondPlayer: {
    j: {
      message: "Player 2 chose rock",
      choice: "rock",
      imageUrl: "images/rock.jpg",
    },
    k: {
      message: "Player 2 chose paper",
      choice: "paper",
      imageUrl: "images/paper.jpg",
    },
    l: {
      message: "Player 2 chose scissors.",
      choice: "scissors",
      imageUrl: "images/scissors.jpg",
    },
  },
};

let player1Choice = null;
let player2Choice = null;

document.addEventListener("keydown", (e) => {
  e.preventDefault();

  const handler1 = KEY_HANDLERS.firstPlayer[e.key];
  const handler2 = KEY_HANDLERS.secondPlayer[e.key];

  if (handler1 && !player1Choice) {
    console.log(handler1.message);
    displayImage(handler1.imageUrl, "choiceImagePlayer1");
    player1Choice = handler1.choice;
  }

  if (handler2 && !player2Choice) {
    console.log(handler2.message);
    displayImage(handler2.imageUrl, "choiceImagePlayer2");
    player2Choice = handler2.choice;
  }

  if (player1Choice && player2Choice) {
    determineWinner(player1Choice, player2Choice);
  }
});

function displayImage(imageUrl, containerId) {
  console.log(imageUrl, containerId);
  const imageElement = document.getElementById(containerId);
  imageElement.src = imageUrl;
}

function determineWinner(choice1, choice2) {
  let winnerMessage = "";

  if (
    (choice1 === "rock" && choice2 === "scissors") ||
    (choice1 === "paper" && choice2 === "rock") ||
    (choice1 === "scissors" && choice2 === "paper")
  ) {
    winnerMessage = "Player 1 wins!";
  } else if (
    (choice1 === "scissors" && choice2 === "rock") ||
    (choice1 === "rock" && choice2 === "paper") ||
    (choice1 === "paper" && choice2 === "scissors")
  ) {
    winnerMessage = "Player 2 wins!";
  } else {
    winnerMessage = "It's a tie!";
  }

  displayWinner(winnerMessage);
}

function displayWinner(message) {
  const winnerElement = document.getElementById("winner");
  winnerElement.textContent = message;
}
