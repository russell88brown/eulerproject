/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

var productsArray = [];
var palindromeArray = [];

function main() {
	generateProductsArray();
	generatePalindromeArray();
	return getMaxOfArray(palindromeArra);
};

function generateProductsArray() {for (i = 100; i < 1000; i++) {for (ii = 100; ii  < 1000; ii++){productsArray.push(i*ii);};};};

function generatePalindromeArray() {
	for (i = 0; i < (productsArray.length-1); i++) {
		if (checkPalindrome(productsArray[i].toString().split("")) === true) {palindromeArray.push(productsArray[i])}
	}
}

function checkPalindrome(array) {
	for (ii = 0; ii < (Math.floor(array.length/2)); ii++) {
		if (array[ii] != array[array.length-1-ii]) {return false};
	};
	return true
};

function getMaxOfArray(numArray) {return Math.max.apply(null, numArray);};

console.log(main()) 