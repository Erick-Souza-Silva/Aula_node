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


