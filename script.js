
const choices = ["rock" , "paper" , "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay  = document.getElementById("computerDisplay");

const resultDisplay = document.getElementById("result");

const playerScore = document.getElementById("playScore");
const computerScore = document.getElementById("comScore");

function playGame(playerChoice) {

    let computerChoice = choices[Math.floor(Math.random() * 3)];
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    let result = "";

    if(computerChoice === playerChoice) {
        result = "IT'S A TIE";
        
    }
    else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
            
        }
    }
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText" , "redText");

    switch(result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore.textContent = Number(playerScore.textContent);
            playerScore.textContent++;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore.textContent = Number(computerScore.textContent);
            computerScore.textContent++;
            break;
    }

}

function reset() {
    setTimeout("location.reload(true)" , 10);
}