let calculateChange = function(total, cash) {
  let result = {};
  let changeRemaining = cash - total;

  if (changeRemaining / 2000 > 1){
    result.twentyDollar = Math.floor(changeRemaining/2000);
    changeRemaining = changeRemaining % 2000;
  }
  if (changeRemaining / 1000 > 1) {
    result.tenDollar = Math.floor(changeRemaining/1000);
    changeRemaining = changeRemaining % 1000;
  }
  if (changeRemaining / 500 > 1) {
    result.fiveDollar = Math.floor(changeRemaining/500);
    changeRemaining = changeRemaining % 500;
  }
  if (changeRemaining / 200 > 1) {
    result.twoDollar = Math.floor(changeRemaining / 200);
    changeRemaining = changeRemaining % 200;
  }
  if (changeRemaining / 100 > 1) {
    result.oneDollar = Math.floor(changeRemaining / 100);
    changeRemaining = changeRemaining % 100;
  }
  if (changeRemaining / 25 > 1) {
    result.quarter = Math.floor(changeRemaining / 25);
    changeRemaining = changeRemaining % 25;
  }
  if (changeRemaining / 10 > 1) {
    result.dime = Math.floor(changeRemaining / 10);
    changeRemaining = changeRemaining % 10;
  }
  if (changeRemaining / 5 > 1) {
    result.nickel = Math.floor(changeRemaining / 5);
    changeRemaining = changeRemaining % 5;
  }
  result.penny = changeRemaining;


  return result;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));