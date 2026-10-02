const choices = ["rock", "paper", "scissors"];
let playerChoices = [];
let computerChoices = [];

let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector(".results");

rockButton.addEventListener("click", (e) => {
    playRound("rock");
});
paperButton.addEventListener("click", (e) => {
    playRound("paper");
});
scissorsButton.addEventListener("click", (e) => {
    playRound("scissors");
});

function playRound(playerChoice) {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice)
    computerChoices.push(computerChoice);
    console.log(computerChoices)
    playerChoices.push(playerChoice);
    console.log(playerChoices)

    let cc = computerChoices[computerChoices.length - 1];
    let pc = playerChoices[playerChoices.length - 1];

    console.log(`cc: ${cc} pc: ${pc}`)

    if (cc === "rock" && pc === "scissors") {
        computerScore++;
    } else if (cc === "paper" && pc === "rock") {
        computerScore++;
    } else if (cc === "scissors" && pc === "paper") {
        computerScore++;
    } else playerScore++;

    if (computerScore === 5 || playerScore === 5) {
        return computerScore > playerScore ? 
        results.textContent = `You lost! You: ${playerScore} vs Computer: ${computerScore}` :
        results.textContent = `You won! You: ${playerScore} vs Computer: ${computerScore}`;
    } else return results.textContent = `You: ${playerScore} vs Computer: ${computerScore}`;
}