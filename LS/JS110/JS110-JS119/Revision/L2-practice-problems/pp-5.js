/*
problem:
=======
compute the sum of numerical properties of an object based on a filtering criteria

example:
========
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

total age of male members = 444

data structure:
==============
input: object
output: number

variable to filter male members from the object
variable to sum the age of male members

algo:
=====
1. filter male members from the values of munsters object
2. add the age of filtered members
*/

function ageOfMales(munsters) {
    /*
    let values = Object.values(object);
    // console.log(values);
    let males = values.filter(value => value.gender === 'male');
    console.log(males.reduce((a,b) => a.age + b.age),0); */
    
    let totalAge = 0;
    for (let members in munsters) {
        if(munsters[members]["gender"] === "male") {
            totalAge += munsters[members]["age"];
        }
    }
    return totalAge;
}

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

console.log(ageOfMales(munsters));