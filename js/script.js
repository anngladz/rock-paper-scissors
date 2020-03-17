function clearMessages() {
  document.querySelector('.message').innerHTML = '';
}

let playerScore = 0;
let computerScore = 0;
let draws = 0;

function playGame(playerInput, playerName) {
  clearMessages();

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'rock';
    } else if (argMoveId == 2) {
      return 'paper';
    } else if (argMoveId == 3) {
      return 'scissors';
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  let computerMove = getMoveName(randomNumber);

  document.querySelector('.computer-move').innerHTML = 'Computer: ' + computerMove;

  let playerMove = getMoveName(playerInput);

  document.querySelector('.player-move').innerHTML = playerName + ': ' + playerMove;

  function displayResult(argComputerMove, argPlayerMove) {
    if (argComputerMove == argPlayerMove) {
      document.querySelector('.result').innerHTML = 'Draw!';
      document.querySelector('.draws').innerHTML = ++draws;
      document.querySelector('.result').classList.remove('win', 'loose');
      document.querySelector('.result').classList.add('draw');
    } else if (argComputerMove == 'rock' && argPlayerMove == 'paper' || argComputerMove == 'paper' && argPlayerMove == 'scissors' || argComputerMove == 'scissors' && argPlayerMove == 'rock') {
      document.querySelector('.result').innerHTML = 'You win!';
      document.querySelector('.player-points').innerHTML = ++playerScore;
      document.querySelector('.result').classList.remove('draw', 'loose');
      document.querySelector('.result').classList.add('win');
    } else {
      document.querySelector('.result').innerHTML = 'You loose!';
      document.querySelector('.computer-points').innerHTML = ++computerScore;
      document.querySelector('.result').classList.remove('draw', 'win');
      document.querySelector('.result').classList.add('loose');
    }
  }

  displayResult(computerMove, playerMove);

  if (computerScore + playerScore + draws >= document.querySelector('select').value) {
    document.querySelector('.overlay').classList.remove('hide');
    document.querySelector('.game-over').classList.add('show');
    if (computerScore > playerScore) {
      document.querySelector('.final-score').innerHTML = 'Computer wins! Better luck next time!';
      document.querySelector('.final-score').classList.remove('draw', 'win');
      document.querySelector('.final-score').classList.add('loose');
    } else if (playerScore > computerScore) {
      document.querySelector('.final-score').innerHTML = document.querySelector('input[name="name"]').value + ' wins!';
      document.querySelector('.final-score').classList.remove('draw', 'loose');
      document.querySelector('.final-score').classList.add('win');
    } else {
      document.querySelector('.final-score').innerHTML = 'Draw!';
      document.querySelector('.final-score').classList.remove('win', 'loose');
      document.querySelector('.final-score').classList.add('draw');
    }
  }

  document.querySelector('.round-counter').innerHTML++;
}

function startGame(event) {
  event.preventDefault();
  document.querySelector('.overlay').classList.add('hide');
  document.querySelector('.game-start').classList.add('hide');
  document.querySelector('.player-name').innerHTML = 'Player name: ' + document.querySelector('input[name="name"]').value;
  document.querySelector('.rounds').innerHTML = document.querySelector('select').value;
  document.querySelector('.round-counter').innerHTML = 0;
}

document.getElementById('info').addEventListener('submit', startGame);

document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1, document.querySelector('input[name="name"]').value);
});
document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2, document.querySelector('input[name="name"]').value);
});
document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3, document.querySelector('input[name="name"]').value);
});