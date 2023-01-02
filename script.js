// 1. fix "wrong input" after playGameAnswer = no
// 2. fix "it's a tie" when wrong input during playRound 
// 3. check others code --> clean up --> move on  

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
                return "rock";
            } else if (randomNumber === 2) {
                return "paper";
            } else {
                return "scissors";
            }
        }
        let computerSelection = getComputerChoice();

        // get case-insensitive player choice 
        function getPlayerChoice() {
            let playerSelection = prompt("Rock, Paper or Scissors? ").toLowerCase();
            if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
                return playerSelection;
            } else {
                alert("Wrong input! Type: 'Rock', 'Paper' or 'Scissors' ");
            }
        }
        let playerSelection = getPlayerChoice();

        // play one round 
        function playRound(playerSelection, computerSelection) {
            if (playerSelection === "rock" && computerSelection === "paper") {
                computerScore++;
                return "You lost!";
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScore++;
                return "You won!";
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                playerScore++;
                return "You won!";
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                computerScore++;
                return "You lost!";
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                computerScore++;
                return "You lost!";
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerScore++;
                return "You won!";
            } else {
                return "It's a tie";
            }
        }
        let playRoundResult = playRound(playerSelection, computerSelection);

    console.log(playRoundResult);
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    console.log(" ");
    }

    // show result
    if (playerScore > computerScore) {
        alert("You won the game!")
        } else if (playerScore < computerScore) {
        alert("You lost the game!")
        } else if (playerScore === computerScore) {  
        alert("The game was a tie!")
        };
}

// get input to start new game
function initializeGame() {
    let playGameAnswer = prompt("Start new game? (Yes/No): ").toLowerCase();
    
    while (playGameAnswer === "yes") {
        playerScore = 0;
        computerScore = 0;
        playRoundResult = 0;
        console.clear();
        game();
        initializeGame();
        playGameAnswer++;
    }    
    
    if (playGameAnswer === "no") {
        alert("Bye!");
        return;
    } else {
        alert("Wrong input! Type: Yes/No ");
        initializeGame();
    }
    
}
console.log(initializeGame());




