/*
given the angles of a triangle, classify them as right, acute or obtuse

valid triangle
1. sum of angles = 180 and
2. all angles > 0

right: largest angle is exactly 90
obtuse: largest angle is > 90
acute: largest angle < 90

assume: all angles are integers

ds:
input: number
output: string

variables:
largest angle

algo:
1. detemine the validity of input
    a. smallest angle > 0
    b. sum of angles = 180
2. right: largest angle = 90
3. obtuse: largest angle > 90
4. acute: largest angle < 90
*/

function validTriangle(sortedAnglesArray) {
    let sumOfAngles = sortedAnglesArray[0] + sortedAnglesArray[1] + sortedAnglesArray[2];
    if(sortedAnglesArray[0] > 0 && sumOfAngles === 180) return true;
    return false;
}

function triangle(angle1, angle2, angle3) {
    let sortedAngles = [angle1, angle2, angle3].sort((a,b) => a - b);
    if(validTriangle(sortedAngles)) {
        if(sortedAngles[2] === 90) return "Right Triangle";
        else if (sortedAngles[2] > 90) return "Obtuse Triangle";
        else return "Acute Triangle";
    }
    
    return "Invalid Triangle";
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"