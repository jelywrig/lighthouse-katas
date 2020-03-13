const generateBoard = function(whiteQueen, blackQueen){
  let board = [];
  for(let i = 0; i < 8 ; i++){
    board.push([0, 0, 0, 0, 0, 0, 0, 0]);
  }
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;

  return board;
}

const queenThreat = function(board){
  
  let q1 = [];
  
  //find first queen
  for(let r = 0; r < 8 && q1.length === 0; r++) {
    for (let c = 0; c < 8 && q1.length === 0; c++) {
      if(board[r][c]) {
        q1 = [r, c];
      };
    }
  }
  //check remainder of row
  for (let c = q1[1] + 1; c < 8 ; c++){
    if (board[q1[0]][c]) { 
      return true;
    }
  }
  //check remainder of column
  for (let r = q1[0] + 1; r < 8 ; r++) {
    if (board[r][q1[1]]) { 
      return true; 
    }
  }
  //check diagonal down right
  for (let r = q1[0] + 1, c = q1[1] + 1 ; r < 8 && c < 8; r++, c++) {
    if (board[r][c]) {
      return true;
    }
  }

  // check diagonal down left
  for (let r = q1[0] + 1, c = q1[1] - 1; r < 8 && c >= 0; r++, c--) {
    if (board[r][c]) {
      return true;
    }
  }
  return false;
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));