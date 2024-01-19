/*
Write a function that accepts a string, and returns the same string with all even 
indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. 
The indexing just explained is zero based, so the zero-ith index is even, 
therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). 
Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
Examples:

"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"

*/

function toWeirdCase(string){
  //TODO
  
  if(string.split(' ').length > 1) {
    return string.split(' ').map((word) => {
      let nuWord = '';
      [...word].forEach((w,i) => {
        i % 2 ? nuWord += w.toLowerCase() : nuWord += w.toUpperCase()
      });
      return nuWord;
    }).join(' '); 
  }
  else {
    return [...string].map((char, index) => {
      return index % 2 ? char.toLowerCase() : char.toUpperCase();
    }).join('');
  }
}
console.log(toWeirdCase('This') === 'ThIs');
console.log(toWeirdCase('is') === 'Is');
console.log(toWeirdCase('This is a test') === 'ThIs Is A TeSt');