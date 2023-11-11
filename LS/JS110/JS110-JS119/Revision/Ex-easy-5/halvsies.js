/*
prob
====
given an array, return an array with two elements:
first element is an array of first half of the elements of original array
second element is an array of second half of the element of the original array

in case of odd number of elements in the input array, the middle element will be part of first half

example
=======
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

ds:
===
input: a one-dimensional array
output: a two-dimensional array

other variables
1. length of the original array
2. two arrays storing first and second half of the input array

algo:
====
1. determine the length of the array
2. if length is odd, 
    a. push first half including the middle element of the elements in a new array
3. if length is even,
    a. push first half of the elements in a new array
4. push second of the array in another new array
5. push both the new arrays in the resulting array
*/

function halvsies(array) {
    let lengthArray = array.length;
    let firstHalfArray = [];
    let secondHalfArray = [];
    let result = [];
    
    for(let counter = 0; counter < lengthArray/2; counter++) {
        firstHalfArray.push(array[counter]);
    }
    
    for(let counter = Math.ceil(lengthArray / 2); counter < lengthArray; counter++) {
        secondHalfArray.push(array[counter]);
    }
    result.push(firstHalfArray, secondHalfArray);
    console.log(result);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]