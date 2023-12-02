/*
given a string, convert every alternate alphabet in staggered cases: uppercase followed by lower case
ignore the non-alphabets

ex:
==
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

ds
==
input: string
output: new string

algo:
=====
1. iterate through each char of the string
2. if the char is alphabet, then uppercase
3. the next char is alphabet, then lowercase
4. goto step until the end of string
5. return the new string
*/

function staggeredCase(string) {
    let counter = 0;
    return string
            .split("")
            .map((char) => {
                if (counter % 2 === 0 && char >= 'A' && char <= 'z') {
                    counter++;
                    return char.toUpperCase();
                }
                else if (counter % 2 === 1 && char >= 'A' && char <= 'z') {
                    counter++;
                    return char.toLowerCase();
                }
                else return char;
            })
            .join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS"));
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);