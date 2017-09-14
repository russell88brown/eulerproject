/*
https://projecteuler.net/problem=3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/


function main() {
	number = 600851475143
	primeFactorArray = [];

	for (i = 0; i < 10; i ++) {
		primeFactorArray.push(nextPrime(number));
		console.log(primeFactorArray);
		console.log(primeFactorArray[i]);
		console.log(number + "=" + number + "/" + primeFactorArray[i])
		number = number/primeFactorArray[i];
		console.log(number)
		if (checkPrime(number) === true) {primeFactorArray.push(number);return primeFactorArray};
	};
};

function nextPrime(num) {
	for (ii = 2; ii < num; ii++) {
		if ((num/ii) === Math.round(num/ii)) {
			console.log(ii);
			return ii;
		};
	};
};


function checkPrime(num) {
	for (ii = 2; ii < num; ii++) {
		if ((num/ii) === Math.round(num/ii)) {
			console.log(false)
			return false;
		};
	};
	console.log(true)
	return true
};



console.log(main());