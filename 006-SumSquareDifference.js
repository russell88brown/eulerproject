/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/



function main() {
	var sumSquare = 0;
	var squareSum = 0;
	for (i = 1; i < 101; i++) {sumSquare += Math.pow(i,2);squareSum += i;};
	return Math.pow(squareSum,2)-sumSquare;
}

console.log(main());