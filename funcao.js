
function verificandoNumeros(numero){
   
    return numero % 2 == 0; // Retorna true se o número for par, caso contrário retorna false, mais simplificado.
       
    /**if (numero % 2 == 0){
        return true}else {
        return false}
        ; */ 
        // Função que verifica se um número é par ou ímpar. Se o número for divisível por 2 (resto da divisão igual a zero), retorna true (par); caso contrário, retorna false (ímpar).

       
     /** if (numero % 2 == 0)
        return true;
        return false; */
    // Outra forma simplificada de escrever a função sem usar chaves para o bloco if.


    
}


function imprimeNumero(numero){

console.log("Numero gerado: " + numero); // Imprimindo o numero gerado no console

let numeroPar = verificandoNumeros(numero);

if (numeroPar) {
    console.log("O numero e par"); // Imprime a mensagem porque 4 e par
}else { 
    console.log("O numero e impar"); // Esta linha nao sera executada porque 4 e par
} 
}// Função que gera um número aleatório entre 0 e 100, verifica se é par ou ímpar usando a função verificandoNumeros, e imprime o resultado no console.

 // Chamando a função para executar o código acima
// Isso demonstra a criação e uso de funções em JavaScript, incluindo passagem de parâmetros, retorno de valores e chamadas de função.


let numeroGerado = Math.floor(Math.random() * 101); // Gerando um número aleatório entre 0 e 100 usando Math.random() e Math.floor() para arredondar para baixo.

imprimeNumero(numeroGerado); // Chamando a função imprimeNumero e passando o número gerado como argumento.


function Somar(a,b){
    return a + b; // Retorna a soma dos dois parametros a e b
} // Função que recebe dois parâmetros (a e b) e retorna a soma deles.

let resultadoSoma = Somar(10, 5); // Chamando a função Somar com os argumentos 5 e 10, e armazenando o resultado na variável resultadoSoma.
console.log("Resultado da soma: " + resultadoSoma); // Imprimindo o resultado da soma no console.
// Isso demonstra a criação e uso de funções com múltiplos parâmetros em JavaScript.
