// to do: Play Button --> Replace with choice --> Play again ---> Additional text
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
    // enable buttons
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

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
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        roundResult.textContent = "It's a tie!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        roundResult.textContent = "It's a tie!";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        roundResult.textContent = "It's a tie!";
    } else {
        roundResult.textContent = "New round..."
    } 

    displayPlayerScore.textContent = "Player: " + playerScore;
    displayComputerScore.textContent = "Computer: " + computerScore;
    console.log(computerSelection);

    // display winner 
    if (playerScore === 5) {
        roundResult.textContent = "You won the game!";
        newGame();
        return;

    } else if (computerScore === 5) {
        roundResult.textContent = "You lost the game!";
        newGame();
        return;
    };
}



function newGame() {
    playerScore = 0;
    computerScore = 0;

    // disable buttons
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    
    // create playButton
    const gameResult = document.querySelector("#gameResult");
    const playButton = document.createElement("button");
    playButton.classList.add("playButton");
    gameResult.appendChild(playButton);
    playButton.textContent = "Play again";

    playButton.addEventListener('click', () => {
        playRound();
        gameResult.removeChild(playButton)
    });
}