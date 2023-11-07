/*
problem
=======
given an array of objects, increment the values without destroying the original object.
Use map method

example
=======
arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
result = [{ a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 }];

ds
==
1. Input: array of objects
2. Output: new array of objects

Intermittent variables
the values of the object into a list of numbers in an array

algo
====
1. Iterate through each object in the array 
2. At each iteration, convert the values of the object into an array
3. Iterate and increment each element in the array 
4. Assign the incremented value to the key of the object
5. The resulting object is the answer
*/

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

function incrementValuesObject(array) {
    let result = array.map(object => {
        let arrayValues = Object.values(object);
        let newArrayValues = arrayValues.map(value => value += 1);
        let arrayKeys = Object.keys(object);
        arrayKeys.forEach((key, index) => {
            object[key] = newArrayValues[index];
        })
        return object;
    })
    console.log(result);
}

incrementValuesObject(arr);