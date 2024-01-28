const options = ["rock", "paper", "scissor"];
let scorePlayer = 0;
let scoreComputer = 0;

const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
    game("rock");
});

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
    game("paper");
});

const btnScissor = document.querySelector('#scissor');
btnScissor.addEventListener('click', () => {
    game("scissor");
});

function updateScores() {
    document.getElementById('player-score').textContent = `Player's Score: ${scorePlayer}`;
    document.getElementById('computer-score').textContent = `Computer's Score: ${scoreComputer}`;
}

function updateWinnerMessage(message) {
    document.getElementById('winner-message').textContent = message;
}

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if ((playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return `It's a tie.`;
    } else if (result == "Player") {
        scorePlayer++;
        updateScores();
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        scoreComputer++;
        updateScores();
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (scorePlayer === 5 || scoreComputer === 5) {
        announceWinner();
    }
}

function announceWinner() {
    if (scorePlayer === 5 || scoreComputer === 5) {
        if (scorePlayer > scoreComputer) {
            updateWinnerMessage("Congratulations! You are the winner.");
        } else if (scoreComputer > scorePlayer) {
            updateWinnerMessage("Computer is the winner. Better luck next time.");
        } else {
            updateWinnerMessage("It's a tie. The game is drawn.");
        }
        // Optionally, reset the scores for a new game
        // scorePlayer = 0;
        // scoreComputer = 0;
        updateScores();
    }
}

// Remove the following line as it will automatically call the game function without user interaction
// game();
