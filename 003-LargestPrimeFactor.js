/*
https://projecteuler.net/problem=3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143?
*/


var number = 600851475143;
var primeFactorArray = []

function largestPrimeFactor() {
	i = 0
	do {primeFactorArray.push(nextPrime(number)); number = number/primeFactorArray[i];i++} while (checkPrime(number) === false);
	primeFactorArray.push(number);
	console.log(primeFactorArray);
	return getMaxOfArray(primeFactorArray);
};

function nextPrime(num) {for (ii = 2; ii < num; ii++) {if ((num/ii) === Math.round(num/ii)) {return ii;};};};


function checkPrime(num) {
	for (ii = 2; ii < num; ii++) {
		if ((num/ii) === Math.round(num/ii)) {
			return false;
		};
	};
	return true
};

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

console.log(largestPrimeFactor());