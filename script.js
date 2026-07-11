let playerScore = 0;
let computerScore = 0;

const choices = ["rock","paper","scissors"];
const result = document.getElementById("result");
function getComputerChoice(){

    const random = Math.floor(Math.random()*3);

    return choices[random];

}

function playGame(playerChoice){

    const computerChoice = getComputerChoice();

    if(playerChoice===computerChoice){
        result.innerText="It's a Tie!";
    }
    else if(
    playerChoice==="rock" && computerChoice==="scissors" ||
    playerChoice==="paper" && computerChoice==="rock" ||
    playerChoice==="scissors" && computerChoice==="paper"
    ){
        playerScore++;
        result.innerText="You Win!";
    }
    else{
        computerScore++;
        result.innerText="Computer Wins!";
    }

document.getElementById("playerScore").innerText = playerScore;

document.getElementById("computerScore").innerText = computerScore;

document.getElementById("playerChoice").innerText =
"You chose: " + playerChoice;

document.getElementById("computerChoice").innerText =
"Computer chose: " + computerChoice;
}



document.getElementById("rock")
.addEventListener("click",function(){

playGame("rock");

});

document.getElementById("scissors")
.addEventListener("click",function(){

playGame("scissors");

});

document.getElementById("paper")
.addEventListener("click",function(){

playGame("paper");

});

document.getElementById("reset")
.addEventListener("click",function(){

playerScore=0;

computerScore=0;

document.getElementById("playerScore").innerText=0;

document.getElementById("computerScore").innerText=0;

document.getElementById("result").innerText="Choose an option!";
document.getElementById("playerChoice").innerText = "You chose:";
document.getElementById("computerChoice").innerText = "Computer chose:";

});