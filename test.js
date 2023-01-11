const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const container = document.querySelector("#container");

// display round result
const roundResult = document.createElement("p");
roundResult.classList.add("roundResult");
container.appendChild(roundResult);

// display player score
const displayPlayerScore = document.createElement("p");
displayPlayerScore.classList.add("displayPlayerScore");
container.appendChild(displayPlayerScore);

// display computer score
const displayComputerScore = document.createElement("p");
displayComputerScore.classList.add("displayComputerScore");
container.appendChild(displayComputerScore);



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
        roundResult.textContent = "You lost!";
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        roundResult.textContent = "You won!";
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        roundResult.textContent = "You won!";
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        roundResult.textContent = "You lost!";
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        roundResult.textContent = "You lost!";
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundResult.textContent = "You won!";
        playerScore++;
    } else {
        roundResult.textContent = "It's a tie!";
    } 

displayPlayerScore.textContent = "Player: " + playerScore;
displayComputerScore.textContent = "Computer: " + computerScore;
}










