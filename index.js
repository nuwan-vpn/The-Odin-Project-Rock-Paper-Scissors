console.log("Hello")
const options = ["rock", "paper", "scissor"];

function getComputerChoice(){
    const choice = options[Math.floor((Math.random())*options.length)];
    // console.log(choice);
    return choice;   
}

function checkWinner (playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "Tie";
    } else if ((playerSelection === "rock" && computerSelection === "scissor") ||
                (playerSelection === "paper" && computerSelection === "rock")  ||
                (playerSelection === "scissor" && computerSelection === "paper")){
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie"){
        return "It's a tie";
    } else if (result == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    
}

function game(){
    console.log("Welcome");
    for(let i=0; i<5; i++){
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()
//getComputerChoice();
