document.querySelector('.rock').addEventListener('click', ()=> {playRound('rock')} );
document.querySelector('.paper').addEventListener('click', ()=> {playRound('paper')} );
document.querySelector('.scissors').addEventListener('click', ()=> {playRound('scissors')});
let playerScore = 0;
let computerScore=0;
let result;
let playerScoreboard= document.querySelector('.playerScore')
let computerScoreboard= document.querySelector('.computerScore')
let resultScoreboard = document.querySelector('.scoreboard-mid')

function verification()  {
  if(playerScore==5) {
    console.log(`Venceu!  player:${playerScore} x CPU: ${computerScore}`)
  }
  else if(computerScore==5){
    console.log(`Perdeu!  player:${playerScore} x CPU: ${computerScore}`)
  }
}

function computerPlay(){
  let randomNumber = Math.floor(Math.random()*3);
  if (randomNumber==0) {
    return 'rock';
  }
  else if (randomNumber==1)
  {
    return 'paper';
  }
  else if (randomNumber==2)
  {
    return 'scissors';
  }
};

function updateScoreBoard () {
  playerScoreboard.innerHTML = playerScore;
  computerScoreboard.innerHTML = computerScore;
  resultScoreboard.innerHTML = result;
}

function playRound (playerSelection,computerSelection){
  if(computerScore==5 || playerScore==5) {
    return
  }
  computerSelection = computerPlay()
  switch (playerSelection) {
    case'rock':
    if (computerSelection == 'rock') {
      result = 'EMPATE'
      break;
    }
    if (computerSelection == 'paper') {
      result = 'PERDEU'
      computerScore++
      break;
    }
    if (computerSelection == 'scissors') {
      result='GANHOU'
      playerScore++
      break;
    }

    case'paper':
    if (computerSelection == 'rock') {
      playerScore++;
      result='GANHOU'
      break;
    }
    if (computerSelection == 'paper') {
      result = 'EMPATE'
      break;
    }
    if (computerSelection == 'scissors') {
      result = 'PERDEU'
      computerScore++
      break;
    }

    case'scissors':
    if (computerSelection == 'rock') {
      result = 'PERDEU'
      computerScore++;
      break;
    }
    if (computerSelection == 'paper') {
      result='GANHOU'
      playerScore++
      break;
    }
    if (computerSelection == 'scissors') {
      result = 'EMPATE'
      break;
    }
    
  }
  verification(playerScore,computerScore);
  updateScoreBoard()
  }

  
