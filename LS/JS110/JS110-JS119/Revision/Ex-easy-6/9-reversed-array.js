/*
given an array, reverse the order of elements without using Array.prototype.reverse() method.
The output array should be same as the input array.

example
=======
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

ds
==
input: array
output: same array

algo:
=====
1. create an alias and a shallow copy of the input array
2. Reverse it by iterating on each element of the original element
    a. the first element of reversed array will be the last one in the shallow copy
*/

function reverse(array) {
    let output = array;
    let shalCopy = [...array];
    for(let counter = 0; counter < array.length; counter++) {
        let temp = shalCopy[array.length - counter - 1];
        output[counter] = temp;
    }
    // console.log(array === output);
    return output;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true