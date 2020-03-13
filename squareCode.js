const squareCode = function(message) {
  let text = message.replace(/ /g, '');
  let columns = Math.ceil(Math.sqrt(text.length));
  let square = [];
  let i = 0;
//write square
  for(let r = 0; r < columns && i < text.length; r ++){
    square.push([]);
    for (let c = 0; c < columns && i < text.length ; c++, i++) {
      square[r][c] = text[i];
    }
  }
 
  //read square to result
  let result = '';
  for (let c = 0; c < columns; c++){
    for (let r = 0; r < square.length; r++) {
      if(square[r].length > c){
        result += square[r][c];
      }
    }
    result += ' ';
  }
  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));