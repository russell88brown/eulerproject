/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

var primeNumberArray = [2];
var number = 1;
var i = 3;
var j = 2;

function main() {
	while (primeNumberArray.length < 10001) {
		while (i % j !== 0) {
			j++
			if (j ===i){
				primeNumberArray.push(i);
				break
			}
		}
		i++
		j=2
	}
console.log(primeNumberArray[primeNumberArray.length-1])
}

main();