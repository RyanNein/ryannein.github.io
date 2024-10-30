// alert("T");

// prompt("Hello");

console.log("Hello World");
console.error("error!");
console.warn("Warning!");

let testLet = "let"
var testVar = "var"; // global

TestFunction();

// console.log(testVar);


const score = Object.freeze({
	wins : 5,
	losses : 1
});

score.wins++;

console.log(score);

let h = document.querySelector("h2");
console.log(h.innerHTML);
console.log(h.innerText);

console.log(h.classList);

// h.classList.add("testClass");


const myArray = [1,2,3];
myArray.push(5);
console.log(myArray);

function TestFunction() { 
	console.log(testLet);
	testLet = 5.5;
	console.log(typeof testLet);
 
	// literal
	console.log(`abc ${testLet}`);
}


// loopingATriangle02();
// fizzBuzz();
// chessboard02(20);
// console.log(min(1, 10, 40, 3, 0, -6));

// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));

console.log(countChar("ASDFHUISNAWIOFWAINEFAJWNEFIWJN", "A"));

// Exercises: 

function loopingATriangle01() {
	for (let i = 0; i < 7; i++) {
		let hashString = "";
		while (hashString.length < i + 1) {
			hashString += "#";
		}
		console.log(hashString);
	}
}

function loopingATriangle02() {
	for (let hashString = "#"; hashString.length < 8; hashString += "#")
		console.log(hashString);
}

function fizzBuzz() {
	for (let i = 1; i <= 100; i++) {
		let printString = "";
		if (i % 3 === 0) {
			printString += "Fizz";
		}
		if (i % 5 === 0) {
			printString += "Buzz";
		}
		console.log(printString || i);
	}
}

function chessboard01(gridSize = 8) {
	let hashString = "";
	for (let i = 0; i < gridSize; i++) {
		if (i % 2 === 0) {
			// is even:
			for (let j = 0; j <= gridSize; j++) {
				if (j % 2 == 0) {
					hashString += " ";
				}
				else {
					hashString += "#";
				}
			}
		}
		else {
			// is odd:
			for (let j = 0; j <= gridSize; j++) {
				if (j % 2 == 0) {
					hashString += "#";
				}
				else {
					hashString += " ";
				}
			}
		}
		hashString += "\n";
	}
	console.log(hashString);
}


function chessboard02(gridSize = 8) {
	let hashString = "";
	for (let i = 0; i < gridSize; i++) {
		for (let j = 0; j <= gridSize; j++) {
			if ((i + j) % 2 === 0) {
				hashString += "#";
			}
			else {
				hashString += " ";
			}
		}
		hashString += "\n";
	}
	console.log(hashString);
}

function min(... args) {
	let smallestValue = args[0];

	if (args.length <= 1) return smallestValue;

	for (let i = 1; i < args.length; i++) {
		if (args[i] < smallestValue) {
			smallestValue = args[i];
		}
	}

	return smallestValue;
}

function isEven(num) {
	if (num === 0) {
		return true;
	}
	else if (num == 1){
		return false;
	}
	else {
		if (num > 0){
			return isEven(num - 2);
		}
		else {
			return isEven(num + 2);
		}
	}
}

function countChar (string, char) {
	let count = 0;
	string.split("").forEach(character => {
		if (character === char) {
			count++;
		}
	});

	return count;
}
