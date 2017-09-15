/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

var min = 1;
var max = 20;
number = 0;


function main() {
	do {
		number++
		check = iternateDenominators(number);
	} while (check === false);
	return number;
};


function iternateDenominators(num) {
	for (i = min; i < (max+1); i++) {
		if (noRemainder(num,i) === false) {return false}
		};
	return true
};

function noRemainder(numerator,denominator){if ((numerator/denominator) === Math.floor(numerator/denominator)) {return true} else {return false};};

console.log(main())