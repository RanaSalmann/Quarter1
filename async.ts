//code will run before async
console.log("Before anychronous code");
//code will run when you decided
function doSomething() {
    console.log("Print doSomething")
}
setTimeout(doSomething, 5000)

setInterval(doSomething, 1000)
console.log("After Asynchronous code");