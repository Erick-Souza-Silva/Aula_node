//** Essa parte e uma revisão da aula 1 */


let nome = "Maria"; // Declaração de variável string = nome

let numero = 25; // Declaração de variável número = 25
numero = 30; // Atribuição de novo valor a variável numero
numero = "Trinta"; // Atribuição de valor string a variável numero, agora numero é uma string e uma tipagem dinâmica e fraca em JavaScript

let booleano = true; // Declaração de variável booleana = true (verdadeiro)
booleano = false; // Atribuição de novo valor a variável booleano = false (falso)

let preson = {
    nome: "João", // Propriedade nome do objeto preson
    idade: "28", // Propriedade idade do objeto preson
    altura: "1.75" // Propriedade altura do objeto preson

}; // Declaração de objeto preson com propriedades nome, idade e altura

let nomes = ["Ana", "Bruno", "Carlos"]; // Declaração de array nomes com três elementos string, vetores

resultado = preson.nome + " " + preson.idade; // Concatenando propriedades do objeto preson e atribuindo a variável resultado 


function printPreson(preson){
    console.log("Nome: " + preson.nome); // Imprimindo a propriedade nome do objeto preson no console
    console.log("Idade: " + preson.idade);
    console.log("Altura: " + preson.altura);
} // Função que recebe um objeto preson como parâmetro e imprime suas propriedades no console


function printPreson(preson){
  return preson.nome + " " + preson.idade + " " + preson.altura;
}// Função que recebe um objeto preson como parâmetro e retorna uma string concatenando suas propriedades




console.log("Imprimindo objeto preson:"); // Imprimindo mensagem no console
printPreson(preson); // Chamando a função printPreson e passando o objeto preson como argumento


function main(){
    let retomandoPersoninfo = function(nomesDepessoas){
        return nomesDepessoas;
    }
    let saindo = retomandoPersoninfo(nomes); // Chamando a função retomandoPersoninfo e passando nomes como argumento
    console.log(saindo);
}

main();// Chamando a função main para executar o código acima
