const urlEncode = function(text) {
  let result = '';
  for (let l of text.trim()) {
    if (l === ' ') {
      result += '%20';
    } else {
      result += l;
    }
  }
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));