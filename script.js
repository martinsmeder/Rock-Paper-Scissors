// get computer choice 
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
let computerSelection = getComputerChoice();

// get case-insensitive player choice 
function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper or Scissors? ").toLowerCase();
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    } else {
        alert("Wrong input! Type: 'Rock', 'Paper' or 'Scissors' ");
    }
}
let playerSelection = getPlayerChoice();

// play one round 