let sumLargestNumbers = function(data) {
  let num1 = data[0];
  let num2 = data[1];

  for (let i = 2; i < data.length; i++){
    
    if (data[i] > num1) {
      if (num1 > num2){
        num2 = data[i];
      } else {
        num1 = data[i];
      }
    } else if (data[i] > num2){
      num2 = data[i];
    }

  }
  return num1 + num2;
}



console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));