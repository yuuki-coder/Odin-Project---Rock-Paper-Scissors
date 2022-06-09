function computerPlay(){
  let randomNumber = Math.floor(Math.random()*3);
  if (randomNumber==0) {
    let result = "rock";
    return result;
  }
  else if (randomNumber==1)
  {
    let result = "paper";
    return result;
  }
  else if (randomNumber==2)
  {
    let result = "scissors";
    return result;
  }
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    
      case 'rock':
       if(computerSelection=="rock"){
         return ("Draw");
       }
       else if(computerSelection=="paper"){
         return ("You Lose");
       }
       else if(computerSelection=="scissors"){
         return ("You Win");
       }
        break;
    
      case 'paper':
      if(computerSelection=="rock"){
         return ("You Win");
       }
       else if(computerSelection=="paper"){
         return ("Draw");
       }
       else if(computerSelection=="scissors"){
         return ("You Lose");
       }
        break;
    
      case 'scissors':
      if(computerSelection=="rock"){
         return ("You Lose");
       }
       else if(computerSelection=="paper"){
         return ("You Win");
       }
       else if(computerSelection=="scissors"){
         return ("Draw");
       }
    
        break;
      default:
        console.log("Unexpected error");
    }
}

function game(){
    let playerScore=0;
    let computerScore=0;
    let playerSelection
    let computerSelection
    let result

while (playerScore < 5 && computerScore < 5) {
      playerSelection = prompt("Choose Rock, Paper or Scissors: ").toLowerCase();
      computerSelection = computerPlay();
  result = playRound(playerSelection, computerSelection)
  
  if(result=="You Win") {
      playerScore++
      console.log(result)
      console.log("Player Score: " + playerScore + "       " + playerSelection );
      console.log("Computer Score: " + computerScore + "     " + computerSelection);
      console.log ("======================================================================");
    }

else if   (result=="You Lose") {
  computerScore++
  console.log(result)
  console.log("Player Score: " + playerScore + "       " + playerSelection );
  console.log("Computer Score: " + computerScore + "     " + computerSelection);
  console.log ("======================================================================");

}
else {
  console.log(result)
  console.log("Player Score: " + playerScore + "       " + playerSelection );
  console.log("Computer Score: " + computerScore + "     " + computerSelection);
  console.log ("======================================================================");
}

}
if (playerScore==5) {
  console.log("Congratulations, You win!")
}
else {
  console.log("Game Over, You lose!")
}
}
game();