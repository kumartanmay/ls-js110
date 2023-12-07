/*
Given an year > 1970, returns the number of Fridays which are also 13th day of the month.

ex:
==
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

ds:
==
input: date (year)
output: number (count of fridays the 13th)

other vars:
object storing days of the week of every 13th of the month

algo:
====
1. For the given year, determine the days of the week of 13th of every month
2. Count the number of fridays
*/

function fridayThe13ths(year) {
    let daysOn13th = [];
    // determine days of 13th of each month of the year
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    MONTHS.forEach((_, index) => {
        let date = new Date(year, index, 13);
        let days = date.getDay()
        daysOn13th.push(days);
    })
    // console.log(daysOn13th);
    return daysOn13th.filter(day => day === 5).length;
    
}

console.log(fridayThe13ths(1986));
console.log(fridayThe13ths(2015));
console.log(fridayThe13ths(2017));