/*
For a given nonempty string s find a minimum substring t and the maximum number k, 
such that the entire string s is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return :

    a tuple (t, k) (in Python)
    an array [t, k] (in Ruby and JavaScript)
    in C, return k and write to the string t passed in parameter

Examples:

"ababab" ---> (t = "ab", k = 3)

"abcde" ---> (t = "abcde", k = 1)
because for this string, the minimum substring 't'
such that 's' is 'k' times 't', is 's' itself.
*/

function repeatedSubstrings(s) {
  /*
  1. input: string
  2. info: find the minimum substring and count of concatenations required to
  publish the same input string
  3. Create all substrings of minimum length = 2
  4. concat each string with itself and compare with the input string
  5. if it matches, return the iterations required to reproduce the string
  */
  let subStrings = [];
  
  // create substrings from the input string
  for(let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      subStrings.push(s.slice(i, j+1));
    }
  }
  
  // check if each substring can be concatenated
  for (let i = 0; i < subStrings.length; i++) {
    for (let count = 1; count <= s.length; count++) {
      if (subStrings[i].repeat(count) === s) return [subStrings[i], count];
      continue;
    }
  }
}

console.log(repeatedSubstrings('aaaaa'));
console.log(repeatedSubstrings('ababab'));
console.log(repeatedSubstrings('abcde'));