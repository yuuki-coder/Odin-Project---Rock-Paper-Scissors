function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber == 0) {
    let result = 'rock'
    return result
  } else if (randomNumber == 1) {
    let result = 'paper'
    return result
  } else if (randomNumber == 2) {
    let result = 'scissors'
    return result
  }
}

announceWinner = () => {
  const announceResult = document.querySelector('.containerAnnounceResult')
  if (playerScore === 5) {
    announceResult.innerText = 'YOU WIN!'
  } else if (computerScore === 5) {
    announceResult.innerText = 'YOU LOSE'
  }
}
win = () => {
  const playerScoreBoard = document.querySelector('.playerScoreBoard')
  playerScore++
  playerScoreBoard.innerText = playerScore
}

lose = () => {
  const computerScoreBoard = document.querySelector('.computerScoreBoard')
  computerScore++
  computerScoreBoard.innerText = computerScore
}

displaySelection = (playerSelection, computerSelection) => {
  let playerSelectionHTML = document.querySelector('.playerSelection')
  let computerSelectionHTML = document.querySelector('.computerSelection')
  playerSelectionHTML.innerText = playerSelection
  computerSelectionHTML.innerText = computerSelection
}

function playRound(playerSelection) {
  let computerSelection = computerPlay()

  if (playerScore < 5 && computerScore < 5) {
    switch (playerSelection) {
      case 'rock':
        if (computerSelection == 'paper') {
          lose()
          displaySelection(playerSelection, computerSelection)
        } else if (computerSelection == 'scissors') {
          win()
          displaySelection(playerSelection, computerSelection)
        } else if (computerSelection == 'rock') {
          displaySelection(playerSelection, computerSelection)
        }
        break

      case 'paper':
        console.log('paper')
        if (computerSelection == 'rock') {
          return 'You Win'
        } else if (computerSelection == 'paper') {
          return 'Draw'
        } else if (computerSelection == 'scissors') {
          return 'You Lose'
        }
        break

      case 'scissors':
        console.log('scissor')
        if (computerSelection == 'rock') {
          return 'You Lose'
        } else if (computerSelection == 'paper') {
          return 'You Win'
        } else if (computerSelection == 'scissors') {
          return 'Draw'
        }

        break
    }
  }
  announceWinner()
}

/*function game(result) {
  let playerScore
  let computerScore
  document.querySelector('.playerScoreBoard').innerText = playerScore
  document.querySelector('.computerScoreBoard').innerText = computerScore

  if (result == 'You Win') {
    playerScore++
    document.querySelector('.playerScoreBoard').innerText = playerScore
  } else if (result == 'You Lose') {
    computerScore++
    document.querySelector('.computerScoreBoard').innerText = computerScore
  }
}
*/

const bodyHTML = document.querySelector('body')

var computerScore = 0
var playerScore = 0

// button1 (Rock)

const buttonRock = document.querySelector('.buttonRock')

buttonRock.addEventListener('click', playRound, false)
buttonRock.myParam = 'rock'

buttonRock.addEventListener('click', function () {
  playRound('rock')
})

// button2 (Paper)

const buttonPaper = document.querySelector('.buttonPaper')
buttonPaper.addEventListener('click', playRound, false)
buttonPaper.myParam = 'paper'

// button3 (Scissors)

const buttonScissors = document.querySelector('.buttonScissors')
buttonScissors.addEventListener('click', playRound, false)
buttonScissors.myParam = 'scissors'

document.querySelector('.playerScoreBoard').innerText = playerScore
document.querySelector('.computerScoreBoard').innerText = computerScore
