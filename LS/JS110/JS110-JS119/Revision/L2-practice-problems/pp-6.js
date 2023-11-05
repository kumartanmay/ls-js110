/*
problem:
=======
print the key and values of the object in a hard-coded string

example:
========
(Name) is a (age)-year-old (male or female).
*/

function printKeyValues(munsters) {
    for (let members in munsters) {
        console.log(`${members} is a ${munsters[members]['age']}-year-old ${munsters[members]['gender']}`);
    }
}

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

printKeyValues(munsters);