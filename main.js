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
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    console.log(result);

    if (result.includes("win")) {
        scorePlayer++;
    } else if (result.includes("lose")) {
        scoreComputer++;
    }

    updateScores(); // Call the function to update scores in the HTML
}

// Remove the following line as it will automatically call the game function without user interaction
// game();
