/*
https://projecteuler.net/problem=1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
var trueNumbersArray = [];

function main() {
	getCheckStoreNumbers()
	console.log(trueNumbersArray)
	return sumArray();
};

function getCheckStoreNumbers() {
	for (var i = 0; i < 999; i++) {
		testNumber = i + 1;
		p = 0;
		q =0;
		console.log("********** start new numner")
		console.log("i: " + testNumber)
		if (isMultipleOfThree(testNumber) === true) {p = 1; console.log("3: true")} else {console.log("3: false")}; 
		if (isMultipleOfFive(testNumber) === true) {q = 1; console.log("5: true")} else {console.log("5: false")};
		if (p === 1 || q ===1) {trueNumbersArray.push(testNumber); console.log("push: true")} else {console.log("push: false")};
	};
};


function isMultipleOfThree(num) {
	console.log(num);
	if ( (num/3) == Math.round(num/3) ) { return true};
	return false
};

function isMultipleOfFive(num) {
	if ( (num/5) == Math.round(num/5) ) { return true};
	return false
};

function getSum(total, num) {
    return total + num;
};


function sumArray() {
	var output = trueNumbersArray.reduce(function(sum, value) {
  		return sum + value;
	}, 0);	
	return output
};


console.log(main());


