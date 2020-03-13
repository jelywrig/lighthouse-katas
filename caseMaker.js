let makeCase = function (input, chosenCase) {
  result = input;
  
  if (!Array.isArray(chosenCase)){
    caseList = [chosenCase];
  } else {
    caseList = chosenCase;
  }

  if (caseList.includes('camel')){
    result = camelCase(result);
  }
  if (caseList.includes('pascal')) {
    result = pascalCase(result);
  }
  if (caseList.includes('snake')) {
    result = snakeCase(result);
  }
  if (caseList.includes('kebab')) {
    result = kebabCase(result);
  }
  if (caseList.includes('title')){
    result = titleCase(result);
  }
  if (caseList.includes('vowel')) {
    result = vowelCase(result);
  }
  if (caseList.includes('consonant')) {
    result = consonantCase(result);
  }
  if (caseList.includes('upper')) {
    result = result.toUpperCase();
  }
  if (caseList.includes('lower')) {
    result = result.toLowerCase();
  }

  return result;
}


let consonantCase = function(input) {
  let result = '';
  for(let l of input){
    if(l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u' ) {
      result += l;
    } else {
      result += l.toUpperCase();
    }
  }
  return result;
}

let vowelCase = function(input) {
  let result = '';
  for(let l of input){
    if(l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u' ) {
      result += l.toUpperCase();
    } else {
      result += l;
    }
  }
  return result;
}


let titleCase = function(input) {
  let result = '';
  result += input[0].toUpperCase();
  for(let i = 1; i < input.length; i++){
    if(input[i] === ' ') {
      i++;
      result += ' ' + input[i].toUpperCase();
    }
    else {
      result += input[i];
    }
  }

  return result;

}

let kebabCase = function(input) {
  let result = '';
  for(let i = 0; i < input.length; i++){
    if(input[i] === ' ') {
      result += '-';
    }
    else {
      result += input[i];
    }
  }
  return result;
}

let snakeCase = function(input) {
  let result = '';
  for(let i = 0; i < input.length; i++){
    if(input[i] === ' ') {
      result += '_';
    }
    else {
      result += input[i];
    }
  }
  return result;
}

let pascalCase = function(input) {
  let result = '';
  result += input[0].toUpperCase();
  for(let i = 1; i < input.length; i++){
    if(input[i] === ' ') {
      i++;
      result += input[i].toUpperCase();
    }
    else {
      result += input[i];
    }
  }

  return result;

}



let camelCase = function(input) {
  let result = '';
  for(let i = 0; i < input.length; i++){
    if(input[i] === ' ') {
      i++;
      result += input[i].toUpperCase();
    }
    else {
      result += input[i];
    }
  }

  return result;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));