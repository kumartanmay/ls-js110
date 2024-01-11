/*
Description:

The vowel substrings in the word codewarriors are o,e,a,io. 
The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, 
return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!
*/

function solve(s){
  // find a vowel
  // check the next letter, if yes, concat it, repeat
  // if not, if the lenght of resulting string is greater than max, reassign max
  // at the end, return max value
  
  const vowel = ['a','e','i','o','u'];
  
  let max = 0;
  let sArr = s.split('');
  
  for(let i = 0; i < s.length; i++) {
    let vowelSub = '';
    while(vowel.includes(sArr[i])) {
      vowelSub += sArr[i];
      i++;
      if(vowelSub.length > max) max = vowelSub.length;
    }
  }
 return max;
}