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
    document.querySelector('.buttonPlayAgain').style.cssText =
      'display:inline-block'
  } else if (computerScore === 5) {
    announceResult.innerText = 'YOU LOSE!'
    document.querySelector('.buttonPlayAgain').style.cssText =
      'display:inline-block'
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

restart = () => {
  const playerScoreBoard = document.querySelector('.playerScoreBoard')
  const computerScoreBoard = document.querySelector('.computerScoreBoard')
  computerScore = 0
  playerScore = 0
  displaySelection('reset', 'reset')
  const announceResult = document.querySelector('.containerAnnounceResult')
  announceResult.innerText = ''
  playerScoreBoard.innerText = playerScore
  computerScoreBoard.innerText = computerScore
  document.querySelector('.buttonPlayAgain').style.cssText = 'display:none'
}

displaySelection = (playerSelection, computerSelection) => {
  let playerSelectionHTML = document.querySelector('.playerSelection')
  let computerSelectionHTML = document.querySelector('.computerSelection')
  switch (playerSelection) {
    case 'rock':
      playerSelectionHTML.innerHTML = '<img src="img/rock.svg" alt="Rock"/>'
      break
    case 'paper':
      playerSelectionHTML.innerHTML = '<img src="img/paper.svg" alt="Paper"/>'
      break
    case 'scissors':
      playerSelectionHTML.innerHTML =
        '<img src="img/scissors.svg" alt="Scissors"/>'
      break
    case 'reset': {
      playerSelectionHTML.innerHTML = ''
      break
    }
  }

  switch (computerSelection) {
    case 'rock':
      computerSelectionHTML.innerHTML = '<img src="img/rock.svg" alt="Rock"/>'
      break
    case 'paper':
      computerSelectionHTML.innerHTML = '<img src="img/paper.svg" alt="Paper"/>'
      break
    case 'scissors':
      computerSelectionHTML.innerHTML =
        '<img src="img/scissors.svg" alt="Scissors"/>'
      break
    case 'reset': {
      computerSelectionHTML.innerHTML = ''
      break
    }
  }
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
        if (computerSelection == 'paper') {
          displaySelection(playerSelection, computerSelection)
        } else if (computerSelection == 'scissors') {
          lose()
          displaySelection(playerSelection, computerSelection)
        } else if (computerSelection == 'rock') {
          win()
          displaySelection(playerSelection, computerSelection)
        }
        break

      case 'scissors':
        if (computerSelection == 'paper') {
          win()
          displaySelection(playerSelection, computerSelection)
        } else if (computerSelection == 'scissors') {
          displaySelection(playerSelection, computerSelection)
        } else if (computerSelection == 'rock') {
          lose()
          displaySelection(playerSelection, computerSelection)
        }
        break
    }
  }
  announceWinner()
}

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
buttonPaper.addEventListener('click', function () {
  playRound('paper')
})

// button3 (Scissors)

const buttonScissors = document.querySelector('.buttonScissors')
buttonScissors.addEventListener('click', playRound, false)
buttonScissors.myParam = 'scissors'
buttonScissors.addEventListener('click', function () {
  playRound('scissors')
})

document.querySelector('.playerScoreBoard').innerText = playerScore
document.querySelector('.computerScoreBoard').innerText = computerScore

//button play again

const buttonPlayAgain = document.querySelector('.buttonPlayAgain')
buttonPlayAgain.addEventListener('click', restart)
