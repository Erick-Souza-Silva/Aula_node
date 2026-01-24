// Variavel Local

let Numero = 10; // Variavel do tipo Let, Armazenada na memoria do computador, podendo ser alterada durante a execuçao do programa.
console.log(Numero); // Imprimindo o valor da variavel Numero, que no caso e 10.

Numero = "Vinicius"; // Atribuindo um novo valor utilizando o mesmo nome da variavel, mais agora do tipo string. O javascript e uma linguagem de tipagem fraca, ou seja, nao e necessario definir o tipo da variavel.
console.log(Numero); // Imprimindo o novo valor da variavel Numero, que agora e "Vinicius".

let nome = "Erick Silva"; // Declarando uma variavel do tipo string.
console.log(nome); // Imprimindo o valor da variavel nome.

let pi = 3.14; // Declarando uma variavel do tipo float.
console.log(pi); // Imprimindo o valor da variavel pi.

let verdadeiro = true; // Declarando uma variavel do tipo boolean, verdadeiro(1).
let falso = false; // Declarando uma variavel do tipo boolean, falso(0).
console.log(verdadeiro); // Imprimindo o valor da variavel verdadeiro.
console.log(falso); // Imprimindo o valor da variavel falso.

let nomes = ["Carlos","ana","Pedro"]; // Declarando uma variavel do tipo array (lista), que armazena varios valores em uma unica variavel.
console.log(nomes); // Imprimindo o valor da variavel nomes, que e uma lista com 3 nomes.

let pessoa = {
    nome: "gabriel",
    idade: 45,
    cpf: "123.456.789-00"
} // Declarando uma variavel do tipo objeto, que armazena varios valores em uma unica variavel, porem com chave e valor.
console.log(pessoa); // Imprimindo o valor da variavel pessoa, que e um objeto com 3 propriedades: nome, idade e cpf.
console.log(pessoa.cpf); // Acessando uma propriedade especifica do objeto pessoa (cpf).
console.log(pessoa.nome); // Acessando uma propriedade especifica do objeto pessoa (nome).
console.log(pessoa.idade); // Acessando uma propriedade especifica do objeto pessoa (idade).

let undef; // Declarando uma variavel sem valor, que por padrao recebe o valor undefined.
console.log(undef); // Imprimindo o valor da variavel undef, que e undefined.

let nulo = null; // Declarando uma variavel com valor nulo.
console.log(nulo); // Imprimindo o valor da variavel nulo, que e null.

let infinito = Infinity; // Declarando uma variavel com valor infinito.
console.log(infinito); // Imprimindo o valor da variavel infinito, que e Infinity.

let nan = NaN; // Declarando uma variavel com valor NaN (Not a Number).
console.log(nan); // Imprimindo o valor da variavel nan, que e NaN (Not a Number).

let Pessoas = [
    {
    nome: "gabriel",
    idade: 45,
    cpf: "123.456.789-00"
    },

    {
    nome: "Fabio",
    idade: 85,
    cpf: "987.654.321-00"
    },
    {
    nome: "Ana",
    idade: 25,
    cpf: "456.789.123-00"
    }
]; /// Declarando uma variavel do tipo array (lista) de objetos, que esta armazenado mais de um objeto dentro de uma unica variavel (uma lista dentro de uma lista).
console.log(Pessoas); // Imprimindo o valor da variavel Pessoas, que e uma lista de objetos.
console.log(Pessoas[1]); // Acessando o segundo objeto da lista Pessoas.
console.log(Pessoas[1].nome); // Acessando a propriedade nome do segundo objeto da lista Pessoas.
console.log(Pessoas[2].cpf); // Acessando a propriedade cpf do terceiro objeto da lista Pessoas.
console.log(Pessoas[0].idade); // Acessando a propriedade idade do primeiro objeto da lista Pessoas.

//filtragem 
Pessoas.forEach(pessoa => {
    console.log("-----"); // Imprimindo uma linha de separacao no console para melhor visualizacao dos resultados.
    console.log("Nome da pessoa na lista:"); // Imprimindo uma mensagem antes de cada nome.
    console.log(pessoa.nome); // Usando o metodo forEach para percorrer cada objeto da lista Pessoas e imprimir o valor da propriedade nome de cada objeto.

});// O forEach e um metodo de array que executa uma funcao para cada elemento do array. Neste caso, estamos usando uma funcao arrow para acessar a propriedade nome de cada objeto na lista Pessoas e imprimir seu valor no console.
// Isso demonstra a declaracao e uso de diferentes tipos de variaveis em JavaScript, incluindo variaveis locais, arrays, objetos e listas de objetos.

let lista = [1,2,3,4,5,6,7,8,9,10]; // Declaracao de um array chamado "lista" que armazena dez elementos numericos.

let Pares = lista.filter(numero_par => numero_par % 2 == 0 ) // Filtrando os numeros pares da lista usando o metodo filter e uma funcao arrow, sendo armazenado na variavel "Pares", que cria um novo array contendo apenas os numeros que satisfazem a condicao de serem pares.
console.log(Pares); // Usando o metodo filter para criar um novo array contendo apenas os numeros pares da lista original. O filtro verifica se o numero e divisivel por 2 (resto igual a 0) e inclui no novo array se a condicao for verdadeira.

let impares = lista.filter(numeros_imapar => numeros_imapar % 2 != 0 ) // Filtrando os numeros impares da lista usando o metodo filter e uma funcao arrow, sendo armazenado na variavel "impares", que cria um novo array contendo apenas os numeros que satisfazem a condicao de serem impares.
console.log(impares); // Usando o metodo filter para criar um novo array contendo apenas os numeros impares da lista original. O filtro verifica se o numero nao e divisivel por 2 (resto diferente de 0) e inclui no novo array se a condicao for verdadeira.
// Isso demonstra como usar o metodo filter para criar sublistas baseadas em condicoes especificas, permitindo a selecao de elementos de um array original com base em criterios definidos.

lista.forEach((numero) => { 
    if (numero % 2 == 0)
         { console.log("O numero " + numero + " e par") }
     else { console.log("O numero " + numero + " e impar"); }
    }
 ); // Usando o metodo forEach para percorrer cada elemento do array "lista" e verificar se o numero e par ou impar usando uma estrutura condicional if-else. Para cada numero, imprime uma mensagem indicando se e par ou impar.
// Isso demonstra como combinar estruturas de repeticao e condicionais para processar e classificar elementos de um array com base em criterios especificos.
// O forEach e um metodo de array que executa uma funcao para cada elemento do array. Neste caso, estamos usando uma funcao arrow para verificar se cada numero na lista e par ou impar e imprimir a mensagem correspondente no console.

num = 20.145
console.log(num.toFixed(2)); // Usando o metodo toFixed para formatar o numero "num" com duas casas decimais. O resultado e uma string representando o numero arredondado para duas casas decimais.
// O metodo toFixed e usado para formatar numeros com um numero especifico de casas decimais. Neste caso, estamos formatando o numero 20.145 para ter duas casas decimais, resultando na string "20.15".
