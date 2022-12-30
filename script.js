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
function playOneRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        alert("It's a tie!");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        alert("You lost!");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        alert("You won!");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        alert("You won!");
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        alert("It's a tie!");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        alert("You lost!");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        alert("You lost!");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        alert("You won!");
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        alert("You won!");
    } else {
        alert("Something went horribly wrong!");
    }
}

// test
console.log("computer: " + computerSelection)
console.log("player: " + playerSelection)
console.log(playOneRound(playerSelection, computerSelection));