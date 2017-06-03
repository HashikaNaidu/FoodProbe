let DIMENSION = 3;

function boardLoop(board, fn) {
  for (let row = 0; row < DIMENSION; row++) {
    for (let col = 0; col < DIMENSION; col++) {
      fn(board[row][col], { row, col });
    }
  }
}


let game = {
  
  createBoard() {
    let board = [];
    for (let row = 0; row < DIMENSION; row++) {
      board[row] = [];
      for (let col = 0; col < DIMENSION; col++) {
        board[row][col] = null;
      }
    }

    return board;
  },

  
  set(board, val, row, col) {
    


    return [
      ...board.slice(0, row),
      [
        ...board[row].slice(0, col),
        val,
        ...board[row].slice(col+1)
      ],
      ...board.slice(row+1)
    ];
  },

  


  display(board) {
    let display = '';
    let prevRow;
    boardLoop(board, (val, coord) => {
      if (coord.row !== prevRow) {
        display += '\n';
        prevRow = coord.row;
      }
      display += `${val == null ? '-' : val} `;
    });
    display += '\n';
    console.log(display);
  }
};

export default game;
