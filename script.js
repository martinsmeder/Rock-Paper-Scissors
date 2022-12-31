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
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "It's a tie!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lost!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You won!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You won!";
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "It's a tie!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lost!";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lost!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You won!";
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "You won!";
    } else {
        return "Something went horribly wrong!";
    }
}

// play 5 rounds
for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    let playRoundResult = playRound(playerSelection, computerSelection);
    console.log("Computer: " + computerSelection)
    console.log("Player: " + playerSelection)
    console.log(playRoundResult);
    console.log(" ");
}




