"use strict";

const weapons = ["rock", "paper", "scissor"];

function getComputerChoice(choices) {
  const random = Math.floor(Math.random() * weapons.length);
  return weapons[random];
}

//1st playRound functtion//

// function playRound(playerSelection, computerSelection) {
//   //// paper
//   if (playerSelection == "paper" && computerSelection == "rock") {
//     return "You won! Paper beats Rock ";
//   } else if (playerSelection == "paper" && computerSelection == "scissor") {
//     return "You lost! Scissor beats paper";
//   } else if (playerSelection == "rock" && computerSelection == "scissor") {
//     return "You won! Rock beats Scissor";
//   } else if (playerSelection == "rock" && computerSelection == "paper") {
//     return "You lost! Paper beats Scissor";
//   } else if (playerSelection == "scissor" && computerSelection == "paper") {
//     return "You won! Scissor beats Paper!";
//   } else if (playerSelection == "scissor" && computerSelection == "rock") {
//     return "You lost! Rock beats Scissor";
//   } else if (playerSelection === computerSelection) {
//     return "Draw";
//   }
// }

// second playround function //
// function playRound(playerSelection, computerSelection) {

//   if (playerSelection === computerSelection) {
//     return "Draw!";
//   } else if (playerSelection == "rock") {
//     if (computerSelection == "paper") {
//       return "You won! Rock beats Paper";
//     } else {
//       return "You lost! Scissor beats Paper";
//     }
//   } else if (playerSelection == "paper") {
//     if (computerSelection == "rock") {
//       return "You won! Paper beats Rock";
//     } else {
//       return " You lost! Scissor beats Paper";
//     }
//   } else if (playerSelecetion == "scissor") {
//     if (computerSelection == "paper") {
//       return "You won! Scissor beats Paper";
//     } else {
//       return "You lost! Rock beats Scissor";
//     }
//   }
// }

// third playround function //
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw!";
  } else if (playerSelection == "rock") {
    return computerSelection == "Scissor"
      ? "You won! Rock beats Scissor "
      : "You lost! Paper beats Rock";
  } else if (playerSelection == "paper") {
    return computerSelection == "rock"
      ? "You won! Paper beats Rock."
      : "You lost! Scissor beats Paper";
  } else if (playerSelection == "scissor") {
    return computerSelection == "paper"
      ? "You won! Scissor beats Paper "
      : "You lost! Rock beats Scissor ";
  }
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(
  "playerSelection =",
  playerSelection,
  "",
  "",
  "",
  "computerSelection =",
  computerSelection
);
