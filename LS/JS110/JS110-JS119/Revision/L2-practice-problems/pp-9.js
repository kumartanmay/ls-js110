/*
problem
=======

given a nested array, the subarray consists of strings or numbers but not both. 
Sort the nested array in ascending order - alphabetically or numerically

example:
=======
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
newArray = [['a', 'b', 'c'], [-3, 2, 11], ['black', 'blue', 'green']];

ds:
==
Input: array
output: new array

Intermittent variable:
store a copy of the original array on which the operation will be performed

algo:
====
1. Copy the original array for performing operations
2. iterate through each subarray and use sort based on data type of first element of the subarray
3. if it is a number then sort numerically
4. if not, then sort alphabetically
*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

function sortNested(array) {
    let result = array.slice()
    
    result.forEach(subArray => {
        if(typeof(subArray[0]) === "number") subArray.sort((a,b) => a - b);
        else subArray.sort()
    })
    
    console.log(result);
}

sortNested(arr);