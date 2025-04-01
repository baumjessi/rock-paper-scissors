let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
let humanChoice;
let computerChoice;
const scoreText = document.getElementById("scoreText");
let newScore;

function getComputerChoice() {
let computerResult = Math.ceil(Math.random() * 3); 
if(computerResult === 1) {
return "rock";
}
else if(computerResult === 2) {
return "paper";
}
else {
return "scissors";
}
};

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", function() {
   humanChoice = "rock";
   playGame();
   scoreText.textContent = newScore;
});


const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", function() {
    humanChoice = "paper";
    playGame();
    scoreText.textContent = newScore;
});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", function() {
    humanChoice = "scissors";
    playGame();
    scoreText.textContent = newScore;
});

function playGame() {
    if(roundNumber < 5) {
        computerChoice = getComputerChoice();
        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            roundNumber++; 
            let newScore = `Paper beats rock! AI wins! AI:${computerScore} Human:${humanScore} Round:${roundNumber}`;
            return newScore;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            roundNumber++;
            newScore = `Rock beats scissors! You win! AI:${computerScore} Human:${humanScore} Round:${roundNumber}`;
            return newScore;
        }
        else if (humanChoice === "rock" && computerChoice === "rock") {
            newScore = `Y'all both picked rock! Let's try again! AI:${computerScore} Human:${humanScore} Round:${roundNumber}`;
            return newScore;
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            roundNumber++;
            newScore = `Scissors beats paper! AI wins! AI:${computerScore} Human:${humanScore} Round:${roundNumber}`;
            return newScore;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            roundNumber++;
            newScore = `Paper beats rock! You win! AI:${computerScore} Human:${humanScore} Round:${roundNumber}`;
            return newScore;
        }
        else if (humanChoice === "paper" && computerChoice === "paper") {
            newScore = `Y'all both picked paper! Let's try again! AI:${computerScore} Human:${humanScore} Round:${roundNumber}`;
            return newScore;
        }
        else if (humanChoice === "scissors" && computerChoice === "scissors") {
            newScore = `Y'all both picked scissors! Let's try again! AI:${computerScore} Human:${humanScore} Round:${roundNumber}`;
            return newScore;
        } 
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            roundNumber++;
            newScore = `Rock beats scissors! AI wins! AI:${computerScore} Human:${humanScore} Round:${roundNumber}`;
            return newScore;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            roundNumber++;
            newScore = `Scissors beats paper! You win! AI:${computerScore} Human:${humanScore} Round:${roundNumber}`;
            return newScore;
        }
        else {
            newScore = `Try again! That's not a choice. AI:${computerScore} Human:${humanScore} Round:${roundNumber}`;
            return newScore;
         } 
    }

        else {
            if (humanScore > computerScore) {
                newScore = `GAME OVER! YOU WIN! AI:${computerScore} Human:${humanScore}`;
                return newScore;
            }
            else {
                newScore = `GAME OVER! AI WINS! AI:${computerScore} Human:${humanScore}`;
                return newScore;
             }
        }
    };