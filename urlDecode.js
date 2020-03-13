const urlDecode = function(text) {
  let pairs = text.split('&');
  let result = {};

  for (let pair of pairs) {
    let args = pair.split('=');
    result[args[0]] = args[1].replace(/%20/g , ' ');
  }
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);