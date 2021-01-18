const buttons = document.querySelectorAll('.button');
const userInput = document.getElementById('user-input');
const userDisplay = document.getElementById('user-display');

// Reset display
function hideAnswers() {
  const answer = document.querySelectorAll('.answer');

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

// Check to see who reaches 5 points first & displays overlay
function determineWinner(userScore, opponentScore) {
  const overlay = document.getElementById('overlay');
  const overlayText = document.getElementById('overlay-text');
  if (userScore === 5) {
    overlay.style.display = 'flex';
    overlay.style.backgroundColor = '#5ac18e';
    overlayText.textContent = 'You Win!';
  } else if (opponentScore === 5) {
    overlay.style.display = 'flex';
    overlay.style.backgroundColor = '#FF7373';
    overlayText.textContent = 'You Lose!';
  }
}

let UserNum = 0;
let OpNum = 0;

function playRound(playerSelection, computerSelection) {
  const resultText = document.getElementById('result-text');
  const userDisplay = document.getElementById('user-display');
  const OpponentDisplay = document.getElementById('opponent-display');
  const userScore = document.getElementById('user-score');
  const opponentScore = document.getElementById('opponent-score');

  playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    resultText.textContent = 'Draw';
    userDisplay.style.backgroundColor = 'lightgrey';
    OpponentDisplay.style.backgroundColor = 'lightgrey';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    OpNum++;
    resultText.textContent = 'You Lose! Scissors beat Paper';
    userDisplay.style.backgroundColor = '#FF7373';
    OpponentDisplay.style.backgroundColor = '#5AC18E';
    opponentScore.textContent = OpNum;
    determineWinner(UserNum, OpNum);
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    UserNum++;
    resultText.textContent = 'You Win! Paper beats Rock';
    userDisplay.style.backgroundColor = '#5AC18E';
    OpponentDisplay.style.backgroundColor = '#FF7373';
    userScore.textContent = UserNum;
    determineWinner(UserNum, OpNum);
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    OpNum++;
    resultText.textContent = 'You Lose! Rock beats Scissors';
    userDisplay.style.backgroundColor = '#FF7373';
    OpponentDisplay.style.backgroundColor = '#5AC18E';
    opponentScore.textContent = OpNum;
    determineWinner(UserNum, OpNum);
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    UserNum++;
    resultText.textContent = 'You Win! Scissors beats Paper';
    userDisplay.style.backgroundColor = '#5AC18E';
    OpponentDisplay.style.backgroundColor = '#FF7373';
    userScore.textContent = UserNum;
    determineWinner(UserNum, OpNum);
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    OpNum++;
    resultText.textContent = 'You Lose! Paper beats Rock';
    userDisplay.style.backgroundColor = '#FF7373';
    OpponentDisplay.style.backgroundColor = '#5AC18E';
    opponentScore.textContent = OpNum;
    determineWinner(UserNum, OpNum);
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    UserNum++;
    resultText.textContent = 'You Win! Rock beats Scissors';
    userDisplay.style.backgroundColor = '#5AC18E';
    OpponentDisplay.style.backgroundColor = '#FF7373';
    userScore.textContent = UserNum;
    determineWinner(UserNum, OpNum);
  } else {
    resultText.textContent = 'error';
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
