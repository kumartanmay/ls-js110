/*
given a string, return an array containing the list of substrings, sorted in ascending order of its length

length of substring will be same as length of the string

example
=======
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

ds
==
input: string
output: array

other variables

algo
====
0. intiate a blank array to store the substrings
1. iterate over each element of the string
2. concatenate the element with the prevent element of the array and push it to the array
3. return the array after iteration
*/

function leadingSubstrings(string) {
    let result = [];
    
    for(let i = string.length; i > 0; i--) {
        result.push(string.slice(0,i));
    }
    
    return result.sort((a,b) => a.length - b.length);
}

console.log(leadingSubstrings('xyz'));
console.log(leadingSubstrings('xxyyzz'));
console.log(leadingSubstrings('x'));