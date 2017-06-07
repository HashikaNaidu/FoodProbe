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
  
   /**
* Check a slice of the board for winner
*/
check(arr) {
let clone = arr.slice(0);
let sum = 0;
while(clone.length) {
let val = clone.pop();
if (val == null) {
return;
}
sum += val;
}
if (sum === 0 || sum === DIMENSION) {
return {
winner: sum / DIMENSION || 0
};
}
return;
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
