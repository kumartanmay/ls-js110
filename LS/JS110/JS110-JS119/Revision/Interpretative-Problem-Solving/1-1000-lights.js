/*
Given the number of lights, find the lights remaining switched on after the count of passes.
Initial status of lights: off
At nth pass, each nth light is toggled.
Find the lights remaining swithced after n passes.

ex
--
function lightsOn(switches) {
  // ...
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

ds:
==
input: number (count of lights)
output: array of numbers

other variables
object storing the status of lights switched on at every pass

algo:
====
1. Given the count, create an array of lights with each element as false indicating off status
2. At each pass, toggle the value of the keys until the count of the pass is reached
    a. check the index of the bulb at each pass, if index is divisible by pass then toggle the value
3. filter the array with elements as value true. 
*/

function lightsOn(count) {
    let lights = [];
    for (let i = 1; i <= count; i++) {
        lights.push(false);
    }
    // console.log(lights);
    
    let pass = 1;
    
    while(pass <= count) {
        lights.map((light, index) => {
            if((index + 1) % pass === 0) lights[index] = !light;
            return lights;
        })
        pass++;
    }
    
    let result = [];
    lights.filter((_, index) => {
        if(lights[index] === true) result.push(index+1);
        return result;
    })
    
    return result;
}

console.log(lightsOn(100));