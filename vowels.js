let numberOfVowels = function(data) {
  let numVowels = 0;

  for (let l of data){
     switch (l) {
       case 'a':
       case 'e':
       case 'i':
       case 'o':
       case 'u':
         numVowels++;
         break;
       default: //do nothing        
     }
  }

  return numVowels;

};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));