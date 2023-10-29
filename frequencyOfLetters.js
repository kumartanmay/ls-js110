let statement = "The Flintstones Rock";
let statementWithoutWhiteSpace = statement.split(" ").join("");
let statementArr = statementWithoutWhiteSpace.split("");
let result = {};

statementArr.forEach(elem => {
    if (!Object.keys(result).includes(elem.toLowerCase())) {
        result[elem] = 1;
    }
    else {
        result[elem]+= 1;
    }
})

console.log(result);