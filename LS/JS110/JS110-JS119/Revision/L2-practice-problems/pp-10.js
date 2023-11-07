/*
problem
=======

given a nested array, the subarray consists of strings or numbers but not both. 
Sort the nested array in descending order - alphabetically or numerically

example:
=======
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
newArray = [['c', 'b', 'a'], [11, 2, -3], ['green', 'blue', 'black']];

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
    let result = array.slice();
    
    result.forEach(subArray => {
        subArray.sort((a,b) => {
            if(typeof(a) === "number") return b - a;
            if(a > b) return -1;
            else if (a < b) return 1;
            else return 0;
        })
    })
    
    console.log(result);
}

sortNested(arr);