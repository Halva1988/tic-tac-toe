const board = document.getElementById('board');
const newGameButton = document.getElementById('new-game');
const xScoreElement = document.getElementById('x-score');
const oScoreElement = document.getElementById('o-score');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let xScore = 0;
let oScore = 0;

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return gameBoard[a];
    }
  }

  return null;
}

function showWinnerModal(winner) {
  const modal = document.getElementById('modal');
  const modalContent = document.querySelector('.modal-content');

  modalContent.classList.remove('modal-X', 'modal-O', 'modal-draw');
  modalContent.classList.add(`modal-${winner}`);

  modal.style.display = 'flex';
  showNewGameButton();
}

function showDrawModal() {
  const modal = document.getElementById('modal');
  const modalContent = document.querySelector('.modal-content');

  modalContent.classList.remove('modal-X', 'modal-O');
  modalContent.classList.add(`modal-draw`);

  modal.style.display = 'flex';
  showNewGameButton();
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

function handleClick(index) {
  if (!gameBoard[index] && gameActive) {
    gameBoard[index] = currentPlayer;
    renderBoard();
    const winner = checkWinner();
    if (winner) {
      setTimeout(() => {
        showWinnerModal(`${winner}`);
        updateScore(winner);
        gameActive = false;
      }, 0);
    } else if (!gameBoard.includes('')) {
      setTimeout(() => {
        showDrawModal();
        gameActive = false;
      }, 0);
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function renderBoard() {
  board.innerHTML = '';
  gameBoard.forEach((value, index) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = value;
    cell.addEventListener('click', () => handleClick(index));

    if (value === 'X') {
      cell.classList.add('cell-X');
    } else if (value === 'O') {
      cell.classList.add('cell-O');
    }

    board.appendChild(cell);
  });
}

function updateScore(winner) {
  if (winner === 'X') {
    xScore++;
  } else {
    oScore++;
  }
  xScoreElement.textContent = `X: ${xScore}`;
  oScoreElement.textContent = `O: ${oScore}`;
}

function showNewGameButton() {
  newGameButton.style.display = 'block';
}

function hideNewGameButton() {
  newGameButton.style.display = 'none';
}

function newGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  hideNewGameButton();
  closeModal();
  renderBoard();
}

renderBoard();

newGameButton.addEventListener('click', newGame);