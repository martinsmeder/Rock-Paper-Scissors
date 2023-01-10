const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;


rockButton.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});


paperButton.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});


scissorsButton.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
let computerSelection = getComputerChoice();

// play one round 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        console.log("You lost!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        console.log("You won!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        console.log("You won!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        console.log("You lost!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        console.log("You lost!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        console.log("You won!");
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("It's a tie!");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("It's a tie!");
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("It's a tie!");
    } 
}
console.log(playRound())
