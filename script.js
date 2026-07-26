let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // get a random number between 0 - 1
    let randomNumber = Math.random();

    if (randomNumber <= 0.33) {
        // if number is between 0 - 0.33 return rock
        return "Rock";
    } else if (randomNumber >= 0.33 && randomNumber <= 0.66) {
        // else if number is between 0.33 - 0.66 return paper
        return "Paper";
    } else {
        // else return scissors
        return "Scissors";
    }
}

function getHumanChoice() {
    // prompt the user for an input
    let humanChoice = prompt("What's your choice?", "");
}