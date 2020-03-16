let prompt = require("prompt-sync")();

let input;
let guesses = [];
let gotIt = false;
let answer = Math.floor(Math.random() * 100);

while ( !gotIt) {

  input = prompt("Guess a number: ");

  if (input === 'exit') break;

  let guess = Number(input);

  if ( isNaN(guess)) {
    console.log("Not a number! Try again!");
  } else if (guesses.includes(guess)) {
    console.log ("Already Guessed!");
  } else if (guess === answer) {
    guesses.push(guess);
    console.log("You got it! You took " + guesses.length + ' attempts!');
    gotIt = true;
  } else if (guess > answer) {
    guesses.push(guess);
    console.log('Too high!');
  } else if (guess < answer) {
    guesses.push(guess);
    console.log('Too Low!');
  }

}