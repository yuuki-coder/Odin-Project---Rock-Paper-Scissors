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

function playRound(event) {
  let computerSelection = computerPlay()
  let playerSelection = event.currentTarget.myParam
  switch (playerSelection) {
    case 'rock':
      if (computerSelection == 'rock') {
        return 'Draw'
      } else if (computerSelection == 'paper') {
        return 'You Lose'
      } else if (computerSelection == 'scissors') {
        return 'You Win'
      }
      break

    case 'paper':
      if (computerSelection == 'rock') {
        return 'You Win'
      } else if (computerSelection == 'paper') {
        return 'Draw'
      } else if (computerSelection == 'scissors') {
        return 'You Lose'
      }
      break

    case 'scissors':
      if (computerSelection == 'rock') {
        return 'You Lose'
      } else if (computerSelection == 'paper') {
        return 'You Win'
      } else if (computerSelection == 'scissors') {
        return 'Draw'
      }

      break
    default:
      console.log('Unexpected error')
  }
}

function game() {
  let playerScore = 0
  let computerScore = 0
  let playerSelection
  let computerSelection
  let result

  while (playerScore < 5 && computerScore < 5) {
    playerSelection = prompt('Choose Rock, Paper or Scissors: ').toLowerCase()
    computerSelection = computerPlay()
    result = playRound(playerSelection, computerSelection)

    if (result == 'You Win') {
      playerScore++
      console.log(result)
      console.log('Player Score: ' + playerScore + '       ' + playerSelection)
      console.log(
        'Computer Score: ' + computerScore + '     ' + computerSelection
      )
      console.log(
        '======================================================================'
      )
    } else if (result == 'You Lose') {
      computerScore++
      console.log(result)
      console.log('Player Score: ' + playerScore + '       ' + playerSelection)
      console.log(
        'Computer Score: ' + computerScore + '     ' + computerSelection
      )
      console.log(
        '======================================================================'
      )
    } else {
      console.log(result)
      console.log('Player Score: ' + playerScore + '       ' + playerSelection)
      console.log(
        'Computer Score: ' + computerScore + '     ' + computerSelection
      )
      console.log(
        '======================================================================'
      )
    }
  }
  if (playerScore == 5) {
    console.log('Congratulations, You win!')
  } else {
    console.log('Game Over, You lose!')
  }
}

const bodyHTML = document.querySelector('body')

// button1 (Rock)
const button = document.createElement('button')
button.classList.add('button1')
bodyHTML.appendChild(button)
const btn1 = document.querySelector('.button1')
btn1.innerText = 'Rock'

btn1.addEventListener('click', playRound, false)
btn1.myParam = 'rock'

// button2 (Paper)

const button2 = document.createElement('button')
button2.classList.add('button2')
bodyHTML.appendChild(button2)
const btn2 = document.querySelector('.button2')
btn2.innerText = 'Paper'

btn2.addEventListener('click', playRound, false)
btn2.myParam = 'paper'

// button3 (Scissors)

const button3 = document.createElement('button')
button3.classList.add('button3')
bodyHTML.appendChild(button3)
const btn3 = document.querySelector('.button3')
btn3.innerText = 'Scissors'

btn3.addEventListener('click', playRound, false)
btn3.myParam = 'scissors'
