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
     switch (computerSelection) {

  case 'rock':
   if(playerSelection=='rock'){
     return ("Draw! Rock ties with Rock.")
   }
   else if(playerSelection=='paper'){
     return ("You win! Paper beats Rock.")
   }
   else if(playerSelection=='scissors'){
     return ("You lose! Rock beats Scissors.")
   }
    break;

  case 'paper':
  if(playerSelection=='rock'){
     return ("You lose! Paper beats Rock.")
   }
   else if(playerSelection=='paper'){
     return ("Draw! Paper ties with Paper.")
   }
   else if(playerSelection=='scissors'){
     return ("You win! Scissors beats Paper.")
   }
    break;

  case 'scissors':
  if(playerSelection=='rock'){
     return ("You win! Rock beats Scissors.")
   }
   else if(playerSelection=='paper'){
     return ("You lose! Scissors beats Paper.")
   }
   else if(playerSelection=='scissors'){
     return ("Draw! Scissors ties with Scissors.")
   }

    break;
  default:
    console.log("Unexpected error");
}
    }

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
