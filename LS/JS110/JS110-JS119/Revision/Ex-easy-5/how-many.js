/*
find the frequency of elements in an array. The elements are case-sensitive.

example
=======
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1

ds:
===
input: array
output: object

algo:
=====
1. create an empty object which will contain the element and its frequency as key-value pair
2. Iterate through each element in the array and check for keys in the object
    a. if key is present, increment the value by 1
    b. if key is absent, create a new key-value pair by initiating the value to 1
3. return the object
*/

function countOccurrences(arr) {
    let result = {};
    arr.forEach(elem => {
        (result[elem]) ? result[elem] += 1 : result[elem] = 1;
    })
    
    return result;
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));