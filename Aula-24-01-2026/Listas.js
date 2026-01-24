let numeros = [1,2,3,4,5];

console.log(numeros[0]); // Acessando o primeiro elemento do array "numeros", formato bit zero index
console.log(numeros[1]); // Acessando o segundo elemento do array "numeros", formato bit 1 index
console.log(numeros[2]); // Acessando o terceiro elemento do array "numeros", formato bit 2 index
console.log(numeros[3]); // Acessando o quarto elemento do array "numeros", formato bit 3 index
console.log(numeros[4]); // Acessando o quinto elemento do array "numeros", formato bit 4 index
// Arrays sao estruturas de dados que armazenam uma colecao de elementos, podendo ser de diferentes tipos de dados, como numeros, strings, objetos, etc. Eles sao indexados por numeros inteiros, com o primeiro elemento tendo o indice 0.

numeros.includes(2); // O metodo includes verifica se um determinado elemento esta presente no array "numeros". Retorna true se o elemento for encontrado e false caso contrario.
// Exemplo: numeros.includes(2) retornara true, pois o numero 2 esta presente no array.
console.log(numeros.includes(2)); // Imprime no console o resultado da verificacao feita pelo metodo includes, que neste caso sera true.
console.log(numeros.includes(6)); // Imprime no console o resultado da verificacao feita pelo metodo includes, que neste caso sera false, pois o numero 6 nao esta presente no array.

