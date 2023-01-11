const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const container = document.querySelector("#container");

// display round result
const para = document.createElement("p");
para.classList.add("para");
container.appendChild(para);


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
        para.textContent = "You lost!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        para.textContent = "You won!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        para.textContent = "You won!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        para.textContent = "You lost!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        para.textContent = "You lost!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        para.textContent = "You won!";
    } else {
        para.textContent = "It's a tie!";
    } 
}








