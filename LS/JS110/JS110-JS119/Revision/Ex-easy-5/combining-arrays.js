/*
prob
====
given two arrays, return a combination of both. The returned array should not contain duplicate elements

example:
=======
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

ds
==
input: two arrays
output: a new array

variable to store index of repeating elements in one array

algo
====
1. iterate over each element in one array and see if the other includes it.
2. If no, filter the elements in a new array
4. Concatenate new array and the second array
*/

function union(arr1, arr2) {
    
    let removeDupArr1 = arr1.filter(elem => !arr2.includes(elem));
    console.log(removeDupArr1.concat(arr2));
}

union([1, 3, 5], [3, 6, 9]);