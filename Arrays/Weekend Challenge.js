function checkGameState(board) {
  const size = board.length;

  // Check rows and columns for a winner
  for (let i = 0; i < size; i++) {
      if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
          return `Game over: ${board[i][0]} has won.`;
      }
      if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
          return `Game over: ${board[0][i]} has won.`;
      }
  }

  // Check diagonals for a winner
  if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      return `Game over: ${board[0][0]} has won.`;
  }
  if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      return `Game over: ${board[0][2]} has won.`;
  }

  // Check for a draw or ongoing game
  for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
          if (!board[i][j]) {
              return "Player 1's turn"; // Game still ongoing
          }
      }
  }

  return "Game over: It's a draw.";
}

// Example usage
let gameBoard = [
  [null, "X", "O"],
  ["X", "O", null],
  ["O", null, "X"]
];

console.log(checkGameState(gameBoard));
