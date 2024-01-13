/*
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

function isPangram(string){
  //filter all the alphabets from the string
  //iterate over every alphabet, to check if it is in the string
  const alphabets = arrayLettersBetween('a', 'z');
  let chars = string.toLowerCase().split('');
  
  let onlyAlphaChars = chars.filter(char => (char >='a' && char <='z'));
  return alphabets.every(l => onlyAlphaChars.includes(l));
}

function arrayLettersBetween(char1,char2) {
  let result = [];
  
  for(let i = char1.charCodeAt(0); i <= char2.charCodeAt(0); i++) {
    result.push(String.fromCharCode(i));
  }
  return result;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram("This isn't a pangram!"));
