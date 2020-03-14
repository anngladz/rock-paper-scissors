function clearMessages() {
    document.querySelector('.message').innerHTML = '';
}

let playerScore = 0;
let computerScore = 0;
let draws = 0;

function playGame(playerInput) {
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

    document.querySelector('.player-move').innerHTML = 'You: ' + playerMove;

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
}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});