/**
 * sumDigits()
 *
 *  Write a function called `sumDigits` that accepts a number
 *  and returns a sum total of the value of the digits
 *
 *
 *  Examples:
 *    sumDigits(12) => 3
 *    sumDigits(1112) => 5
 *    sumDigits(406) => 10
 **/

 // ++ YOUR CODE below frase.split(" ")  console.log()

function sumDigits(num){
var novaNumba = 0;

var digits = num.toString().split('');
console.log(digits);

	for (var i = 0; i < digits.length; i++) {
		var aSumar = parseInt(digits[i])
		console.log(aSumar);
	
		if (aSumar !== 0) {
			novaNumba = novaNumba + aSumar
		}
	}	 console.log(novaNumba);
		return novaNumba
}
 // *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
 // *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
 // *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


console.group('ex-05');
  console.log('%cFunction: sumDigits', 'background-color: green; color: white')
console.groupEnd();

console.log('Should return 6 from "123"');
console.assert(sumDigits(123) === 6)

console.log('Should return 11 from "911"');
console.assert(sumDigits(911) === 11)

console.log('Should return 12 from "8040"');
console.assert(sumDigits(8040) === 12)

console.log('Should return 15 from "173220"');
console.assert(sumDigits(173220) === 15)

console.log('\n')
