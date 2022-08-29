'use strict';

let secretNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
let score = 20;
let highscore = 0;
let playing = true;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeBodyNumberStyles = function (color, width) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  if (playing) {
    const guess = Number(document.querySelector('.guess').value);

    // When there is not input
    if (!guess) {
      displayMessage('⛔ No number!');

      // When player wins
    } else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;

      changeBodyNumberStyles('#60b347', '30rem');

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      playing = false;

      // When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  score = 20;
  playing = true;

  changeBodyNumberStyles('#222', '15rem');

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
});
