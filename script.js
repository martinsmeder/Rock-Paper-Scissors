// get computer choice 
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else {
        return "Scissor";
    }
}
let computerSelection = getComputerChoice();

// get user choice 


// play one round 