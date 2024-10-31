	// alert("T");
// prompt("Hello");

// console.log("Hello World");
// console.error("error!");
// console.warn("Warning!");

const score = Object.freeze({
	wins: 5,
	losses: 1
});
score.wins++;

let h = document.querySelector("h2");
// console.log(h.innerHTML);
// console.log(h.innerText);
// console.log(h.classList);
// h.classList.add("testClass");




// Exercises: 

// loopingATriangle02();
// fizzBuzz();
// chessboard02(20);
// console.log(min(1, 10, 40, 3, 0, -6));

// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));

// console.log(countChar("ASDFHUISNAWIOFWAINEFAJWNEFIWJN", "A"));

// console.log(sum(range(1 , 10, 2)));

// console.log(reverseArray([1,2,3,4,5]));  
// console.log(reverseArrayInPlace([1,2,3,4,5]));

// const list = arrayToList([0,1,2,3,4,5]);
// console.log(list);
// const array = listToArray(list); 
// console.log(array);
// console.log(prepend(list, 8));
// console.log(nth(list, 20));

// console.log(deepEquals(5, 5));
// console.log(deepEquals("Five", "Five"));
// console.log(deepEquals({ x: 1, y: 2 }, { x: 1, y: 4 }));
// console.log(deepEquals({ x: 1, y: 2, z: 5 }, { x: 1, y: 2 }));

// console.log(flatten( [
// 	[1, 2, 3],
// 	[10, 11, 12]
// 	] ));

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

function min(...args) {
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
	else if (num == 1) {
		return false;
	}
	else {
		if (num > 0) {
			return isEven(num - 2);
		}
		else {
			return isEven(num + 2);
		}
	}
}

function countChar(string, char) {
	let count = 0;
	string.split("").forEach(character => {
		if (character === char) {
			count++;
		}
	});

	return count;
}

function range(start, end, step = 1) {
	let rangedArray = [];
	for (let i = start; i <= end; i += step) {
		rangedArray.push(i);
	}
	return rangedArray;
}

function sum(numbersArray) {
	let total = 0;
	for (let i = 0; i < numbersArray.length; i++) {
		total += numbersArray[i];
	}
	return total;
}

function reverseArray(array) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		newArray.unshift(array[i]);
	}
	return newArray;
}

function reverseArrayInPlace(array) {
	for (let i = 0; i < Math.floor(array.length / 2); i++) {
		const tempValue = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = tempValue;
	}
	return array;
}

function arrayToList(array) {
	let list = null;
	for (let i = array.length - 1; i >= 0; i--) {
		list = { value: array[i], rest: list };
	}
	return list;
}

function listToArray(list) {
	let array = [];
	let listLeft = list;

	while (listLeft !== null) {
		array.push(listLeft.value);
		listLeft = listLeft.rest;
	}
	return array;
}

function prepend(list, element) {
	let newList = {
		value: element,
		rest: list
	}
	return newList;
}

function nth(list, n) {
	if (list === null) {
		return undefined;
	}
	else if (n === 0) {
		return list.value;
	}
	else {
		return nth(list.rest, n - 1);
	}
}

function deepEquals(a, b) {
	if (a === b)
		return true;

	if (typeof a !== "object" || typeof b !== "object" || a === null || b === null)
		return false;

	const keysA = Object.keys(a), keysB = Object.keys(b);

	if (keysA.length !== keysB.length)
		return false;

	for (let key of keysA) { 
		if (!keysB.includes(key) || !deepEquals(a[key], b[key]))
			 return false; 
	}

	return true;
}

function flatten(twoDArray) {
	/*
	return twoDArray.reduce( (accumulator, currentValue) => {
		return accumulator.concat(currentValue);
	}, [] )
	*/
	let array = [];
	twoDArray.forEach(element => {
		array = array.concat(element);
	});

	return array;
}