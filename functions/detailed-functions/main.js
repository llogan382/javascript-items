// function declaratin: give the function a name and any params


//if a number is passed into a function, it is not changed globally
let num = 4;
function square(number) {
    return number * number;
}
square(num);
// console.log(num);

// if an object or array is passed into a func, it is changed

function myFunc(theArray) {
    theArray[0] = 'Taylor';
}

var myFam = ['Connie', 'Luke', 'Matt'];
var x, y;

x = myFam[0]; // x gets the value "Honda"

myFunc(myFam);
y = myFam[0]; // y gets the value "Toyota"
// (the make property was changed by the function)
console.log(x);
console.log(y);