/*
Given two arrays of equal length and containing no empty elements, alternately combine each element of both 

example
=======
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

ds
==
Input: two arrays
Output: a new array

algo
====
1. initiate an empty array which will store the result
2. Iterate through each element of both and push it to the resulting array
*/

function interleave(arr1, arr2) {
    let result = [];
    
    arr1.forEach((elem, index) => 
    result.push(elem, arr2[index]))
    
    return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));