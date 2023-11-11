/*
problem:
=======
given a floating point number, covert it into deg, minutes and seconds
1 deg = 60 minutes
1 minute = 60 seconds

example
=======
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

ds
==
input: floating
output: string 

other variables:
1. store degrees and minutes 

algo:
====
1. Split the floating number into integer and decimal
2. Multiply the decimal with 60 get minutes
3. Split the minutes into integer and decimal
4. To get seconds multiple the decimal with 60
5. Concatenate deg, minutes and seconds
*/

function dms(angle) {
    let deg = 0;
    let minutes = 0;
    let seconds = 0;
    if(angle >= 0) {
        deg = Math.floor(angle);
        minutes = (angle - deg) * 60;
        seconds = (minutes - Math.floor(minutes)) * 60;
        console.log(`${deg}˚${Math.floor(minutes)}'${Math.floor(seconds)}"`);
    } else {
        angle = 360 + angle;
        dms(angle);
    }
}
dms(-30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
dms(-420);  