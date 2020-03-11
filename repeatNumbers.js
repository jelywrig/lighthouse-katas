let repeatNumbers = function(data) {
  let result = '';
  for(let i = 0; i < data.length; i++){
    for(let x = 0; x < data[i][1]; x++) {
      result += data[i][0];
    }
    if (i < data.length - 1) {
      result += ', ';
    }
  }

  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));