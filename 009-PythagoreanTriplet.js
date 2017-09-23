/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
https://projecteuler.net/problem=9
*/

function main() {
	var a = 0, b = 0, c = 0;

	for (a = 1; a < 1000; a++){
		for (b = 1; b < 1000; b++){
			c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
			if (Number.isInteger(c)  === true) {
				if ((a+b+c) === 1000) {
					console.log("a: " + a + " > " + "b: " + b + " > " + "c: " + c)
					console.log("answer: " + a*b*c);
					return
					}; // check for 1000
			}; // check for whole number
		}; // end of second for loop
	}; // end of first for loop
	console.log("error - range too small");
}; // end of function
	
main();

/*
full iteration does not work

function main() {
	for (a = 1; a < 334; a++){
		for (b = 2; b < 334; b++){
			for (c = 3; c < 334; c++){
				console.log(a + ":" + b + ":" + c);
				if ((Math.pow(a,2) + Math.pow(b,2)) === Math.pow(c,2)) {
					if ((a+b+c) === 1000) {
						console.log("a: " + a + "b: " + b + "c: " + c)
						return a*b*c
					}
				}
			}
		}
	}
	console.log("error -  range too small")
}	

main();
*/