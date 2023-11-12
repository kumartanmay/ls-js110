/*
problem:
========
given minutes in integer and return the time of the day in hh:mm format.
if the integer is negative, consider it minutes before midnight
if the integer is positive, consider it minutes after midnight

total minutes in a day = 24 x 60

example:
======
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

ds:
===
input: an integer
output: string

other variables
hours to store the hour of the day
minuts to store the minutes of the hour of the day

algo:
====
1. if the minutes is positive & less than 1440
    a. hours = integer value of the number divided by 60
    b. minutes = decimal value of hours * 60 (rounded off to the nearest decimal)
2. else if minutes is positive and greater than 1440:
    a. Subtract the 1440 from minutes
    b. go to step 1
3. else if minutes is negative
    a. add minutes to 1440
    b. go to step 1
4. return a string concatenated with "hours:minutes"
*/

const MINUTES_IN_A_DAY = 24 * 60;
const MINUTES_IN_AN_HOUR = 60;
let hh = 0;
let mm = 0;

function timeOfDay(minutes) {
    if (minutes < 0) {
        minutes += MINUTES_IN_A_DAY;
        // console.log("minutes:", minutes);
        timeOfDay(minutes);
    } else if (minutes > MINUTES_IN_A_DAY) {
        minutes = minutes - MINUTES_IN_A_DAY;
        timeOfDay(minutes);
    } else {
        hh = minutes / MINUTES_IN_AN_HOUR;
        mm = (hh - parseInt(hh)) * MINUTES_IN_AN_HOUR;
        // console.log("mm:", mm);
    }
    
    return `${padZero(parseInt(hh))}:${padZero(Math.round(mm))}`
}

function padZero(num) {
    if(num < 10) return `0${num}`
    else return `${num}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

// console.log(timeOfDay(0));
// console.log(timeOfDay(-3));
// console.log(timeOfDay(35));
// console.log(timeOfDay(-1437));
// console.log(timeOfDay(3000));
// console.log(timeOfDay(800));
// console.log(timeOfDay(-4231));