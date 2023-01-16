const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const choices = document.querySelector("#choices");
const score = document.querySelector("#score");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const gameResult = document.querySelector("#gameResult");

// display choices round result
const playerChoice = document.createElement("p");
playerChoice.classList.add("playerChoice");
choices.appendChild(playerChoice); 
playerChoice.textContent = "?";      

const roundResult = document.createElement("p");
roundResult.classList.add("roundResult");
choices.appendChild(roundResult);
roundResult.textContent = "New game..."

const computerChoice = document.createElement("p");
computerChoice.classList.add("computerChoice");
choices.appendChild(computerChoice);
computerChoice.textContent = "?";

// display game result
const displayGameResult = document.createElement("h2");
displayGameResult.classList.add("displayGameResult");
gameResult.appendChild(displayGameResult);

let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

// display player score
const displayPlayer = document.createElement("p");
displayPlayer.classList.add("displayPlayer");
player.appendChild(displayPlayer);
displayPlayer.textContent = "Player: ";

const displayPlayerScore = document.createElement("p");
displayPlayerScore.classList.add("displayPlayerScore");
player.appendChild(displayPlayerScore);
displayPlayerScore.textContent = playerScore;

// display computer score
const displayComputer = document.createElement("p");
displayComputer.classList.add("displayComputer");
computer.appendChild(displayComputer);
displayComputer.textContent = "Computer: ";

const displayComputerScore = document.createElement("p");
displayComputerScore.classList.add("displayComputerScore");
computer.appendChild(displayComputerScore);
displayComputerScore.textContent = computerScore;


// get player choice 
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
    displayGameResult.style.visibility = "hidden"
    
    // enable buttons
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        roundResult.textContent = `You lost! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        roundResult.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        roundResult.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        roundResult.textContent = `You lost! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        roundResult.textContent = `You lost! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        roundResult.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
    } else if (playerSelection === computerSelection) {
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        roundResult.textContent = "It's a tie!";
    } 

    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;

    // display winner 
    if (playerScore === 5) {
        displayGameResult.style.visibility = "visible"
        displayGameResult.textContent = "YOU WON! HUMANITY LIVES TO SEE ANOTHER DAY...";
        newGame();
        return;

    } else if (computerScore === 5) {
        displayGameResult.style.visibility = "visible"
        displayGameResult.textContent = "YOU LOST! HUMANITY HAD A GREAT RUN THOUGH...";
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
        gameResult.removeChild(playButton);
        roundResult.textContent = "New game..."
    });
}
