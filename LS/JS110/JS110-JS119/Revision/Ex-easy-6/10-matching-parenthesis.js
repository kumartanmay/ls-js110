/*
Given a string, return a boolean value if all parenthesis are matched. It must start with '('.

example
=======
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

ds
==
1. input: string
2. output: boolean

other vars
----------
an array storing the index of parenthesis

algo
====
1. Parse through the string and find indices of opening and closing parenthesis
2. If char is "(" then push it to an array
    if char  is ")" then pop the element
3. If the resulting array is empty then we have matching parenthesis
*/

function isBalanced(string){
    let braces = 0;
    // let arrayString = string.split("");
    // braces = arrayString.filter(elem => elem === "(" || elem === ")")
    // console.log(braces);
    
    for(let i = 0; i < string.length; i++){
        if(string[i] === "(") braces++;
        else if(string[i] === ")") braces--;
        // console.log(braces);
        if(braces < 0) return false;
    }
    
    return braces === 0;
}

console.log(isBalanced("What is) this?"));
console.log(isBalanced(")Hey!("));
console.log(isBalanced("((What) (is this))?"));
console.log(isBalanced("What ((is))) up("));
console.log(isBalanced("((What)) (is this))?"));