"use strict";
//
console.log("Before anychronous code");
function doSomething() {
    console.log("Print doSomething");
}
setTimeout(doSomething, 5000);
setInterval(doSomething, 1000);
console.log("After Asynchronous code");
