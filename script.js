let playerScore = 0;
let computerScore = 0;
let playRoundResult = 0;

function game() {

    // play 5 rounds
    for (let i = 0; i < 5; i++) {

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
            if (playerSelection === "Rock" && computerSelection === "Paper") {
                computerScore++;
                return "You lost!";
            } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
                playerScore++;
                return "You won!";
            } else if (playerSelection === "Paper" && computerSelection === "Rock") {
                playerScore++;
                return "You won!";
            } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
                computerScore++;
                return "You lost!";
            } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
                computerScore++;
                return "You lost!";
            } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
                playerScore++;
                return "You won!";
            } else {
                return "It's a tie!";
            }

        }
        let playRoundResult = playRound(playerSelection, computerSelection);

    console.log(playRoundResult);
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    console.log(" ");
    }
}
console.log(game());

// show final score
if (playerScore > computerScore) {
    alert("You won the game!")
} else if (playerScore < computerScore) {
    alert("You lost the game!")
} else {
    alert("It's a tie!")
};



