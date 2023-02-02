const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const choices = document.querySelector("#choices");
const score = document.querySelector("#score");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const gameResult = document.querySelector("#gameResult");

let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

// display choices and round result
const playerChoice = document.createElement("img");
choices.appendChild(playerChoice); 
playerChoice.src = 'images/question.png';

const roundResult = document.createElement("p");
choices.appendChild(roundResult);
roundResult.textContent = "New game...";

const computerChoice = document.createElement("img");
choices.appendChild(computerChoice);
computerChoice.src = 'images/question.png';

// display game result
const displayGameResult = document.createElement("h2");
gameResult.appendChild(displayGameResult);
displayGameResult.textContent = "...";
displayGameResult.style.visibility = "hidden";

// display player score
const displayPlayer = document.createElement("p");
player.appendChild(displayPlayer);
displayPlayer.textContent = "PLAYER: ";

const displayPlayerScore = document.createElement("p");
displayPlayerScore.classList.add("displayPlayerScore");
player.appendChild(displayPlayerScore);
displayPlayerScore.textContent = playerScore;

// display computer score
const displayComputer = document.createElement("p");
computer.appendChild(displayComputer);
displayComputer.textContent = "COMPUTER: ";

const displayComputerScore = document.createElement("p");
displayComputerScore.classList.add("displayComputerScore");
computer.appendChild(displayComputerScore);
displayComputerScore.textContent = computerScore;

// create playButton
const playButton = document.createElement("button");
gameResult.appendChild(playButton);
playButton.textContent = "PLAY AGAIN";
playButton.style.visibility = "hidden";

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
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    };
};
let computerSelection = getComputerChoice();

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// play one round 
function playRound(playerSelection, computerSelection) {
    displayGameResult.style.visibility = "hidden";
    playButton.style.visibility = "hidden";
    
    // enable buttons
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        playerChoice.src = 'images/cave-painting.png';
        computerChoice.src = 'images/paper-bag.png';
        roundResult.textContent = `You lost! ${capitalize(computerSelection)} beats ${playerSelection}.`;
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerChoice.src = 'images/cave-painting.png';
        computerChoice.src = 'images/scissors.png';
        roundResult.textContent = `You won! ${capitalize(playerSelection)} beats ${computerSelection}.`;
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerChoice.src = 'images/paper-bag.png';
        computerChoice.src = 'images/cave-painting.png';
        roundResult.textContent = `You won! ${capitalize(playerSelection)} beats ${computerSelection}.`;
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        playerChoice.src = 'images/paper-bag.png';
        computerChoice.src = 'images/scissors.png';
        roundResult.textContent = `You lost! ${capitalize(computerSelection)} beats ${playerSelection}.`;
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        playerChoice.src = 'images/scissors.png';
        computerChoice.src = 'images/cave-painting.png';
        roundResult.textContent = `You lost! ${capitalize(computerSelection)} beats ${playerSelection}.`;
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerChoice.src = 'images/scissors.png';
        computerChoice.src = 'images/paper-bag.png';
        roundResult.textContent = `You won! ${capitalize(playerSelection)} beats ${computerSelection}.`;
        playerScore++;
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        playerChoice.src = 'images/cave-painting.png';
        computerChoice.src = 'images/cave-painting.png';
        roundResult.textContent = "It's a tie!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        playerChoice.src = 'images/paper-bag.png';
        computerChoice.src = 'images/paper-bag.png';
        roundResult.textContent = "It's a tie!";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        playerChoice.src = 'images/scissors.png';
        computerChoice.src = 'images/scissors.png';
        roundResult.textContent = "It's a tie!";
    };

    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;

    // display winner 
    if (playerScore === 5) {
        displayGameResult.style.visibility = "visible";
        playButton.style.visibility = "visible";
        displayGameResult.textContent = "YOU WON! HUMANITY LIVES TO SEE ANOTHER DAY...";
        newGame();
        return;

    } else if (computerScore === 5) {
        displayGameResult.style.visibility = "visible";
        playButton.style.visibility = "visible";
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

    playButton.addEventListener('click', () => {
        playRound();
        roundResult.textContent = "New game...";
        playerChoice.src = 'images/question.png';
        computerChoice.src = 'images/question.png';
    });
};
