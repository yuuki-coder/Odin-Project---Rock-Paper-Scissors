
   
   function computerPlay(){
      let randomNumber = Math.floor(Math.random()*3)
      if (randomNumber==0) {
        let result = "rock"
        return result
      }
      else if (randomNumber==1)
      {
        let result = "paper"
        return result
      }
      else if (randomNumber==2)
      {
        let result = "scissors"
        return result
      }
    }

    function playRound(playerSelection, computerSelection) {
        let scorePlayer=0
        let scoreComputer=0
     switch (computerSelection) {
      
  case 'rock':
   if(playerSelection=='rock'){
     return ("Draw")
   }
   else if(playerSelection=='paper'){
       ++scorePlayer
     return ("You Win")
   }
   else if(playerSelection=='scissors'){
       scoreComputer++
     return ("You Lose")
   }
    break;

  case 'paper':
  if(playerSelection=='rock'){
    scoreComputer++
     return ("You Lose")
   }
   else if(playerSelection=='paper'){
     return ("Draw")
   }
   else if(playerSelection=='scissors'){
    scorePlayer++
     return ("You Win")
   }
    break;

  case 'scissors':
  if(playerSelection=='rock'){
    scorePlayer++
     return ("You Win")
   }
   else if(playerSelection=='paper'){
    scoreComputer++
     return ("You Lose")
   }
   else if(playerSelection=='scissors'){
     return ("Draw")
   }

    break;
  default:
    console.log("Unexpected error");
}
    }

function game() {
    let scorePlayer=0;
    let scoreComputer=0;
   while (scoreComputer < 5 && scorePlayer < 5) {

        let playerSelection = "rock";
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))
        let result = playRound(playerSelection, computerSelection)
        if (result == "You Win"){
            scorePlayer ++
        }
        else if 
            (result =="You Lose"){
                scoreComputer++
            }
            console.log("Player Score: " + scorePlayer)
            console.log("Computer Score: " + scoreComputer)
            console.log ("======================================================================")

        }
        if(scoreComputer==5) {
            console.log ("Game over, You lose")
        }
        else {
            console.log("Congratulations, You are the winner!")
        }
    
    }


game();
