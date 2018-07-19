/**
 * findLongestWord()
 *
 * Write a function that takes a string of words and returns the longest word.
 * i.e. findLongestWord("i like books full of dogs") should return "books"
 *
**/

// ++ YOUR CODE below
function  findLongestWord(frase){
	var originalFraseArr = frase.split(" ")
    var nuevaFrase="";

    var longestWord = ""
    var longestWordValidCharCount = 0



    for (var i = 0; i < originalFraseArr.length; i++) {
    	var originalWordWithPunc = originalFraseArr[i]
  		var wordNoPunc = ""
  		var validWordOutput = ""

/*s*/   for (var j = 0; j < originalWordWithPunc.length; j++) {
    		var wordChar = originalWordWithPunc[j]

    		// STRIP PUNCTUATION FOR WORDCOUNT EVALUATION
			if (  [ "'", ".", ","].indexOf(wordChar) === -1  ) {
				wordNoPunc = wordNoPunc + wordChar;
			}  

			// STRIP PUNCTUATION FOR VALID WORD PRESENTATION/OUTPUT
			if ( [ ".", ","].indexOf(wordChar) === -1   ) {
				validWordOutput = validWordOutput + wordChar
			}    	
		}

		if(wordNoPunc.length > longestWordValidCharCount ){
			longestWord = validWordOutput
			longestWordValidCharCount = wordNoPunc.length
		}


    }
    console.log(longestWord)
    console.log("this was made by Travis, my answer is below");

    return longestWord








/*




	for (var i = 0; i<frase.length; i++)
	{

		if (frase[i]!=="'" && frase[i]!==".") {
			nuevaFrase= nuevaFrase + frase[i];
		}
	}
	
	//cual debe ser mas grande?
	var novaFrase = nuevaFrase.split(" ");
	//console.log(novaFrase);
	var palabraLarga="";
	var palabraLargaIndex
	

	for (var i = 0; i < novaFrase.length; i++){	
		var novaTres = novaFrase[i];
		//console.log(novaTres);
		console.log(novaTres, "----", palabraLarga)



		if (novaTres.length > palabraLarga.length) {
			palabraLarga = novaTres
			palabraLargaIndex = i
		}
	}*/

console.log(originalFraseArr[palabraLargaIndex]);		
 return originalFraseArr[palabraLargaIndex]
}


	//ahora vamos a evaluar la longitud de cada elemento de la nueva frase dentro de los arrays 
	//nova frase es el chido

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


console.group('ex-04');
  console.log('ex-04\n%cFunction: findLongestWord', 'background-color: green; color: white')
console.groupEnd();

console.log('Should return "baskets" from "I have baskets full of lemons"');
console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')

console.log('Should return "Alexander" from "Alexander shouldn’t talk anymore"');
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
/*
//  punctuation should NOT be included in the evaluation for the longest word
como quita la puntuacion? la encuentras y la remueves, cuantos pasos? 1-encontrar, 2-saber el index de la palabra, evaluas
letra por letra y la vuelves a escribir*/

console.log('Should return "Texas" from "don’t mess with Texas"');
console.assert(findLongestWord("don't mess with Texas") === 'Texas')

console.log('Should return "time" from "a time to act."');
console.assert(findLongestWord('a time to act.') === 'time')


// Epic Mode

console.log('Should return "shouldn\'t" from "shouldn\'t there a time to act."');
console.assert(findLongestWord('shouldn\'t there be a time to act.') === "shouldn't")

console.log('Should return "nothing" from "there is a time for nothing."');
console.assert(findLongestWord('there is a time for nothing.') === "nothing")

console.log('\n')
