/*
Given an object, return an array of properties, one with capitalised letters and the other with capital letters

Example:
=======
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

output:
[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

ds
==
Input: Object
Output: Nested array

Intermittent variables:
an array holding the properties of the array
strings holding the capitalised and capital words

algo:
====
1. Create an array of properties of the object -> array of objects.
2. Iterate through the elements of array and 
    a. capitalise the objects in color
    b. capital the elements in size
3. Create a sub-object containing only size and color properties.
4. Result is an array of values only.
*/

function capitaliseProperties(object) {
    let typeColorSize = Object.values(object); // array of objects
    let colorSize = [];
    
    // console.log(typeColorSize);
    
    typeColorSize.forEach(obj => {
        obj.colors.forEach((color, index) => {
            obj.colors[index] = obj.colors[index][0].toUpperCase() + obj.colors[index].slice(1);
            obj.size = obj.size.toUpperCase();
        })
    })
    console.log(typeColorSize);
    
    typeColorSize.forEach(obj => {
        colorSize.push(obj.colors);
        colorSize.push(obj.size);
    })
    
    return colorSize;
}
    

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
console.log(capitaliseProperties(obj));