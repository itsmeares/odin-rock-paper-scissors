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
    return humanChoice; // Make sure to return the choice
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // get humanChoice in lowercase
        humanChoice = humanChoice.toLowerCase();
        // get computerChoice in lowercase cuz why not
        computerChoice = computerChoice.toLowerCase();
        
        if (computerChoice === "rock" && humanChoice === "scissors") {
            // computer rock, human scissors = computer win
            console.log("You lost! Rock beats scissors.");
            computerScore++;
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            // computer paper, human rock = computer win
            console.log("You lost! Paper beats rock.");
            computerScore++;
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            // computer scissors, human paper = computer win
            console.log("You lost! Scissors beat paper.");
            computerScore++;
        } else {
            // otherwise human win
            console.log("You won, woohoo!");
            humanScore++;
        }   // logs a string value representing the round winner
            // increments humanScore or computerScore based on winner
    }

    playRound(getHumanChoice(), getComputerChoice());
    console.log(`You won ${humanScore} rounds and lost ${computerScore} rounds.`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`You won ${humanScore} rounds and lost ${computerScore} rounds.`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`You won ${humanScore} rounds and lost ${computerScore} rounds.`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`You won ${humanScore} rounds and lost ${computerScore} rounds.`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`You won ${humanScore} rounds and lost ${computerScore} rounds.`);

    if (humanScore > computerScore) {
        return console.log("Wow man you are so good at this! You won the game!");
    } else {
        return console.log("Just close your PC, you lost to a computer...");
    }
}

playGame();