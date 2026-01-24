// condições em JavaScript
if (4){
    console.log("A condicao e verdadeira"); // Imprime a mensagem se a condicao for verdadeira
};

if (false)  {
    console.log("A condicao e verdadeira"); // Esta linha nao sera executada porque a condicao e falsa
};
// Estruturas condicionais sao usadas para executar diferentes blocos de codigo com base em certas condicoes. Neste caso, o primeiro if verifica se a condicao e verdadeira (4 e considerado verdadeiro), enquanto o segundo if verifica uma condicao falsa.

let condicao = 4 < 3;
if (condicao) {
    console.log("A condicao e verdadeira"); // Esta linha nao sera executada porque 4 nao e menor que 3
}else {
    console.log("A condicao e falsa"); // Imprime a mensagem porque a condicao e falsa
};
// Aqui, usamos uma estrutura if-else para fornecer um caminho alternativo de execucao quando a condicao e falsa. Como 4 nao e menor que 3, o bloco else e executado.

//Condição inversa
let condicao2 = 4 > 3;
if (condicao2) {
    console.log("A condicao e verdadeira"); // Esta linha sera executada porque 4 e maior que 3
}else {
    console.log("A condicao e falsa"); // Imprime a mensagem porque a condicao e falsa
};

// negação de condição
let Negacao = !(4 > 3); // A negação de verdadeiro é falso
if (Negacao) {
    console.log("A condicao e verdadeira"); // Esta linha nao sera executada porque a negacao e falsa
}else {
    console.log("A condicao e falsa"); // Imprime a mensagem porque a negacao e falsa
};
// A operacao de negacao (!) inverte o valor booleano da condicao. Neste caso, como 4 e maior que 3 (verdadeiro), a negacao resulta em falso, levando a execucao do bloco else.

let exemplo_lista = [10,20,30,40,50]; // Declaracao de um array chamado "exemplo_lista" que armazena cinco elementos numericos.
if (!(exemplo_lista.length == 0)) {
    console.log("A lista nao esta vazia"); // Imprime a mensagem porque a lista tem elementos
}else {
    console.log("A lista esta vazia"); // Esta linha nao sera executada porque a lista nao esta vazia
};
// Aqui, verificamos se a lista nao esta vazia usando a negacao da condicao que checa se o comprimento do array e igual a zero. Como a lista contem elementos, o bloco if e executado.
// Isso demonstra como estruturas condicionais podem ser usadas para controlar o fluxo de execucao do codigo com base em diferentes condicoes.
