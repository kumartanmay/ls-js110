/*
bubble-sort
===========
given an array of elements, sort it in multiple iterations:
1. compare consecutive elements, 
    a. if the first element is greater than second then swap
    b. if not, no swap
    c. go to the next element
    
ds:
===
input: array
output: same array

vars
a token to keep track of swapping

algo:
====
1. Compare two consecutive elements, if swap value is true
    a. Reset swap value to false
    b. if the first is greater than second, swap
        1. toggle the swap value
    d. if not, go to the next element
2. If swap value is not toggled, return the array
*/

function bubbleSort(arr) {
    let swapBoolean = true;
    while (swapBoolean) {
        swapBoolean = false;
        arr.forEach((elem,index) => {
            if(elem > arr[index+1]) {
                let temp = arr[index + 1];
                arr[index + 1] = elem;
                arr[index] = temp;
                swapBoolean = true;
            }
        })
    }
    return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]


let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
