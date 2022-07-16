let score = {
  playerScore: Number,
  computerScore: Number,
};

const choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  //Check Draw
  if (playerSelection === computerSelection) {
    return `No Winner! You both picked ${choices[playerSelection]}`;
  }

  //Calculate Winner
  let playerWin;

  switch (playerSelection) {
    case 0:
      if (computerSelection === 1) {
        playerWin = false;
      } else {
        playerWin = true;
      }
      break;
    case 1:
      if (computerSelection === 2) {
        playerWin = false;
      } else {
        playerWin = true;
      }
      break;
    case 2:
      if (computerSelection === 0) {
        playerWin = false;
      } else {
        playerWin = true;
      }
      break;

    default:
      break;
  }

  playerWin ? (outcome = "You Win") : (outcome = "You Lose");

  playerWin ? score.playerScore++ : score.computerScore++;

  playerWin
    ? (winner = choices[playerSelection]) &&
      (loser = choices[computerSelection])
    : (winner = choices[computerSelection]) &&
      (loser = choices[playerSelection]);

  return `${outcome}! ${winner} beats ${loser}`;
}

function game() {
  console.log("Welcome to Rock, Paper, Scissors!");
  let playerSelection;
  let computerSelection;

  score.playerScore = 0;
  score.computerScore = 0;

  for (let i = 0; i < 5; i++) {
    //  Inputs
    playerSelection = parseInt(
      prompt("Select Rock [0], Paper [1] or Scissors [2]", "0")
    );
    computerSelection = computerPlay();

    //  Play Round
    console.log(playRound(playerSelection, computerSelection));
    console.log(
      `Player ${score.playerScore} : ${score.computerScore} Computer`
    );
  }

  if (score.playerScore > score.computerScore) {
    console.log(
      `Congratulations, you win with a Score of ${score.playerScore} to ${score.computerScore}`
    );
  } else if (score.playerScore < score.computerScore) {
    console.log(
      `Unlucky, you lose with a Score of ${score.playerScore} to ${score.computerScore}`
    );
  } else {
    console.log(
      `The game is a draw with a Score of ${score.playerScore} to ${score.computerScore}`
    );
  }
}

window.onload = game();
