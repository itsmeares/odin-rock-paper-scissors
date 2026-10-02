function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber <= 0.33) {
        return "Rock";
    } else if (randomNumber >= 0.33 && randomNumber <= 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("What's your choice?", "");
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        
        if (computerChoice === "rock" && humanChoice === "scissors") {
            console.log("You lost! Rock beats scissors.");
            computerScore++;
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            console.log("You lost! Paper beats rock.");
            computerScore++;
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            console.log("You lost! Scissors beat paper.");
            computerScore++;
        } else {
            console.log("You won, woohoo!");
            humanScore++;
        }
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