console.log("Hello")
const options = ["rock", "paper", "scissor"];

function getComputerChoice(){
    const choice = options[Math.floor((Math.random())*options.length)];
    return choice;   
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissor");
        if(choice == null){
            continue;
        }

        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
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
        return `It's a tie.`;
    } else if (result == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    
}

function game(){
    console.log("Welcome!");
    let scorePlayer = 0;
    let scoreComputer = 0;
    for(let i=0; i<5; i++){
        console.log("-------------------------------------");
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        } else if (checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        } 
    }
    console.log("Game over");
    if(scorePlayer > scoreComputer){
        console.log("You are the winner.");
    } else if (scoreComputer > scorePlayer){
        console.log("Computer is the winner.");
    } else {
        console.log("We have a tie.");
    }
}

game()

