const board = document.getElementById('game-board');
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

board.addEventListener('click', handleCellClick);

function handleCellClick(event) {
  const index = event.target.dataset.index;

  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    
    if (checkWin()) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame();
    } else if (gameBoard.every(cell => cell !== '')) {
      alert('It\'s a tie!');
      resetGame();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  return winPatterns.some(pattern =>
    gameBoard[pattern[0]] !== '' &&
    gameBoard[pattern[0]] === gameBoard[pattern[1]] &&
    gameBoard[pattern[1]] === gameBoard[pattern[2]]
  );
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;

  cells.forEach(cell => {
    cell.textContent = '';
  });
}