console.log("Hello")
const options = ["rock", "paper", "scissor"];

function getComputerChoice(){
    const choice = options[Math.floor((Math.random())*options.length)];
    return choice;   
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return "It's tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") |
        (playerSelection === "paper" && computerSelection === "rock") |
        (playerSelection === "scissor" && computerSelection === "paper")    
    ){
        return "You win!";
    } else {
        return "You lose!";
    }
}
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
//getComputerChoice();
