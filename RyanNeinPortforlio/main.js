// alert("T");

console.log("Hello World");
console.error("error!");
console.warn("Warning!");

let testLet = "let"
var testVar = "var"; // global

TestFunction();

// console.log(testVar);


function TestFunction() {
    console.log(testLet);
    testLet = 5.5;
    console.log(typeof testLet);

    // literal
    console.log(`abc ${testLet}`);
}

