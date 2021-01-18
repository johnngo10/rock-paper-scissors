function computerPlay() {
  let items = ['rock', 'paper', 'scissors'];
  let randomNum = Math.floor(Math.random() * Math.floor(3));
  let result = items[randomNum];

  return result;
}

function playRound(playerSelection, computerSelection) {
  playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return 'Draw';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You Lose! Scissors beat Paper';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You Win! Paper beats Rock';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You Lose! Rock beats Scissors';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You Win! Scissors beats Paper';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You Lose! Paper beats Rock';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You Win! Rock beats Scissors';
  } else {
    return 'error';
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    // let playerSelection = window.prompt('Enter rock, paper or scissors!');
    let computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
