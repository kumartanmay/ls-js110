/*
STACK MACHINE INTERPRETATION

Given a string of commands, perform operations based on the words as a command.
Each word is an independent command.

Initial values:
register = 0
stack = []

Assume all the commands are valid

n: place the value n in register
PUSH: Stack the register value at the top. Nothing changes the register value
ADD: Pop the topmost value from stack and add it to the register value. The result is the new value of register
SUB: Pop the topmost value from stack and subtract it from the register value. The result is the new value of register
MULT: Pop the topmost value from stack and multiply it to the register value. The result is the new value of register
DIV: Pop the topmost value from stack and divide the register value by the popped value. The integer quotient is the new value of regiter
REMAINDER: Pop the topmost value from stack and divide the register value by the popped value. The integer remainder is the new value of regiter
POP: Pop the topmost value from stack and assign it to register
PRINT: Display the value of the register

ds:
Input: string
Output: number

other variable
contents of string in an array

algo:
====
1. Split the string into an array of commands
2. Iterate over each element of the array
3. Check if the value is number, place it in the register
4. If not, perform operation according to the command
5. Create a function for each command
*/

let register = 0;
let stack = [];

function minilang(strCommand) {
    let commandArray = strCommand.split(" ");
    
    commandArray.forEach(command => {
        if(!isNaN(command)) register = +command;
        else {
            switch(command) {
                case "ADD": 
                    register += stack.pop();
                    break;
                case "SUB": 
                    register = register - stack.pop();
                    break;
                case "MULT": 
                    register *= stack.pop();
                    break;
                case "DIV":
                    register = parseInt(register / stack.pop());
                    break;
                case "REMAINDER":
                    register = parseInt(register % stack.pop());
                    break;
                case "PUSH":
                    stack.push(register);
                    break;
                case "POP":
                    register = stack.pop();
                    break;
                case "PRINT":
                    console.log(register);
                    break;
                default:
                    console.log('Sorry! something is a miss here.');
            }
        }
    })
}

// minilang('5 PRINT');
minilang('6 PUSH');