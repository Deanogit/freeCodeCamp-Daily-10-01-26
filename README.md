## Tic-Tac-Toe Referee

A matrix-analysis utility that determines the winner of a 3 x 3 Tic-Tac-Toe game by checking all possible win vectors: horizontal, vertical and diagonal.

### The Matrix Coordinate System

The board is represented as an array of arrays. To find a winner, the function inspects specific "lines" of indices.

1.  Horizontal & Vertical (The Loop)
    By using a single loop from 0 - 2, we can check all three rows and all three columns simultaneously. In each iteration, the index `i` acts as a pivot:

        - Rows: We fix the row index `i` and check across columns `0, 1, 2`.

        - Columns: We fix the column index `i` and check across rows `0, 1, 2`.

2.  Diagonals (The Constants)
    Diagnoals are unique and do not vary with the standard row/column loop index `i`. These are checked as static coordinate sets:

        - Main Diagonal: Top-left to bottom-right `[0][0], [1][1], [2][2]`.
        - Main Diagonal: Top-left to bottom-right `[2][0], [1][1], [0][2]`.

### Final Implementation

```JavaScript

function ticTacToe(board) {
  // Check Rows and Columns
  for (let i = 0; i <= 2; i++) {
    // Rows: board[i] is the row, [0][1][2] are the cells
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return `${board[i][0]} wins`;
    }
    // Columns: board[0][1][2] are the rows, [i] is the fixed column
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return `${board[0][i]} wins`;
    }
  }

  // Check Diagonals (Static Coordinates)
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return `${board[0][0]} wins`;
  }
  if (board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
    return `${board[2][0]} wins`;
  }

  // No winner found
  return "Draw";
}

```

### What I Learned

1. Matrix Navigation

I learned how to use a single loop to traverse a 2D array in two different directions. By swapping the position of the iterator variable `i` between the first and second bracket, I can switch between row-major and column-major searching.

2. Logical Operator Precision

I reinforced the importance of the `&&` operator. I learned that while `A === B === C` looks mathematically correct, JavaScript evaluates it as a boolean comparison that fails against strings. Using `A === B && B === C` ensures the actual cell values are compared.

3. Code Optimization

I practiced seperating repeating logic (rows/cols) from unique logic (diagonals). this makes the code faster (checking diagonals only once) and much easier to read for other developers.
