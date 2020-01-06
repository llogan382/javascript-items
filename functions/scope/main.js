// let letx = 'Hello let';
// var varx = 'hello var';
const constx = 'hello const';

function scopeTest() {
    let letx = 'Hello let';
    var varx = 'hello var';

    console.log(letx, varx, constx); // all are visible
}
// scopeTest();

let x = 1;
function a() {
    let z = 2;
    output(z);
}
function b() {
    let z = 3;
}
function output(value) {
    console.log(value);
}
a();

function mommmaFunc() {
    let myvalue = 1;
    let myval2 = 2;

    babyfunc1(myvalue);
    babyfunc2(myvalue);
    babyfunc3(myvalue, myval2);
}

function babyfunc1(value) {
    console.log(value + 'baby 1');
}

babyfunc2 = (value) => {
    console.log(value + 'baby 2');
}

const babyfunc3 = ((value, myval2) => {
    console.log(value + 'baby 3' + myval2);
});

mommmaFunc();