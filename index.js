// Tic-Tac-Toe
// Given a 3×3 matrix (an array of arrays) representing a completed Tic-Tac-Toe game, determine the winner.

// Each element in the given matrix is either an "X" or "O".
// A player wins if they have three of their characters in a row - horizontally, vertically, or diagonally.

// Return:

// "X wins" if player X has three in a row.
// "O wins" if player O has three in a row.
// "Draw" if no player has three in a row.

// function ticTacToe(board) {
//   console.log(board);

//   const pattern1 = [
//     ['1', '1', '1'],
//     ['0', '0', '0'],
//     ['0', '0', '0'],
//   ];

//   // return board;
// }

function ticTacToe(board) {
  console.log(board);

  // const pattern1 = [[
  //  "1", "1", "1"
  // ], ["0", "0", "0"],
  // ["0", "0", "0"]];

  // Horizontal coordinates
  // board[0][0], board[0][1], board[0][2],
  // board[1][0], board[1][1], board[1][2],
  // board[2][0], board[2][1], board[2][2],
  ////
  // Vertical coordinates
  // board[0][0], board[1][0], board[2][0],
  // board[0][1], board[1][1], board[2][1],
  // board[0][2], board[1][2], board[2][2],
  ////
  // Diagonal coordinates
  // board[0][0], board[1][1], board[2][2],
  // board[2][0], board[1][1], board[0][2],

  // return board;
}
