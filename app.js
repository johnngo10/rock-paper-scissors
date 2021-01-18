// import { library, icons } from '@fortawesome/fontawesome-svg-core';
// import {
//   faHandScissors,
//   faHandPaper,
//   faHandRock,
// } from '@fortawesome/free-solid-svg-icons';

// library.add(faHandScissors, faHandPaper, faHandRock);

const buttons = document.querySelectorAll('.button');
const userInput = document.getElementById('user-input');
const userDisplay = document.getElementById('user-display');

function hideAnswers() {
  const answer = document.querySelectorAll('.answer');

  // Hide all answers first
  for (let i = 0; i < answer.length; i++) {
    if (!answer[i].classList.contains('hidden')) {
      answer[i].classList.add('hidden');
    }
  }
}

function computerPlay() {
  let items = ['rock', 'paper', 'scissors'];
  let randomNum = Math.floor(Math.random() * Math.floor(3));
  let result = items[randomNum];

  return result;
}

function playRound(playerSelection, computerSelection) {
  const resultText = document.getElementById('result-text');
  playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    resultText.textContent = 'Draw';
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

// Display user's and opponents answer when button is clicked
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', e => {
    let target = e.currentTarget.id;
    const opponentAnswer = computerPlay();

    // Hide answers first
    hideAnswers();

    // Display user's answer
    if (target === 'rock') {
      const userRock = document.getElementById('user-rock');
      userRock.classList.remove('hidden');
    } else if (target === 'paper') {
      const userPaper = document.getElementById('user-paper');
      userPaper.classList.remove('hidden');
    } else if (target === 'scissors') {
      const userScissors = document.getElementById('user-scissors');
      userScissors.classList.remove('hidden');
    } else {
      console.log('error');
    }
    // Display opponent's answer
    if (opponentAnswer === 'rock') {
      const oppRock = document.getElementById('opponent-rock');
      oppRock.classList.remove('hidden');
    } else if (opponentAnswer === 'paper') {
      const oppPaper = document.getElementById('opponent-paper');
      oppPaper.classList.remove('hidden');
    } else if (opponentAnswer === 'scissors') {
      const oppScissors = document.getElementById('opponent-scissors');
      oppScissors.classList.remove('hidden');
    }

    // Play the round
    playRound(target, opponentAnswer);
  });
}

// game();
