/*
Given a time in hh:mm (24 hour format) return the number of minutes before or after midnight.
Before or after midnight depends on the function call. There are two functions - beforeMidnight and afterMidnight

example
=======
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

ds
==
input: string
output: number

other variables:
constants: hours in a day, minutes in an hour, minutes in a day
variables: hours and minutes from the input string

algo:
====
1. Calculate the minutes in a day based on input after splitting the string into corresponding hours and minutes
2. if the calling function is after midnight, return the value.
3. if the calling function is before midnight, subtract the value from minutes in a day
*/

const HOURS_IN_A_DAY = 24;
const MINUTES_IN_AN_HOUR = 60;
const MINUTES_IN_A_DAY = HOURS_IN_A_DAY * MINUTES_IN_AN_HOUR;

function afterMidnight(hhmm) {
    let hhmmArray = hhmm.split(":")
    let hours = hhmmArray[0];
    let minutes = hhmmArray[1];
    
    return hours*MINUTES_IN_AN_HOUR + Number(minutes);
}

function beforeMidnight(hhmm) {
    return MINUTES_IN_A_DAY - afterMidnight(hhmm);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);