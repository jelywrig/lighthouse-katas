const multiplicationTable = function(maxValue) {
  let result= '';
  
  for(let r = 1; r <= maxValue; r++){
    for(let c = 1; c <= maxValue; c++){
      result += r * c + ' ';
    }
    result += '\n';
  }
  return result;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));