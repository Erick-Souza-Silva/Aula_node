console.log("Bem vindo ao teste de variaveis, Javascript!");
// Mensagem de boas vindas ao usuario, informando que este e um teste de variaveis em Javascript.

let Marcas_de_carros = ["BMW", "Audi", "Mercedes", "Toyota", "Honda"];
// Declarando uma variavel do tipo array (lista), armazendo as marcas de carros

console.log(Marcas_de_carros);
// Imprimindo o valor da variavel Marcas_de_carros, que e uma lista com 5 marcas de carros.

let Marcas_de_carros_lista = [
    {
     marca: 'BMW',
     pais: 'Alemanha',
     Carro_famoso: 'M3',
     carro_mais_rapido_le_mais: null
    },
    {
        marca: 'Audi',
        pais: 'Alemanha',
        Carro_famoso: 'RS7',
        carro_mais_rapido_le_mais: "Porsche_936"
    },
    {
        marca: 'Mercedes',
        pais: 'Alemanha',
        Carro_famoso: 'AMG GT',
        carro_mais_rapido_le_mais: null
    },
    {
        marca: 'Toyota',
        pais: 'Japão',
        Carro_famoso: 'Supra',
        carro_mais_rapido_le_mais: null
    },
    {
        marca: 'Honda',
        pais: 'Japão',
        Carro_famoso: 'Civic Type R',
        carro_mais_rapido_le_mais: null
    }
];
// Declarando uma variavel do tipo array (lista) de objetos, que esta armazenado mais de um objeto dentro de uma unica variavel (uma lista dentro de uma lista).

console.log(Marcas_de_carros_lista);
// Imprimindo o valor da variavel Marcas_de_carros_lista, que e uma lista de objetos.

console.log(Marcas_de_carros_lista[1]);
console.log(Marcas_de_carros_lista[2]);
console.log(Marcas_de_carros_lista[3]);
console.log(Marcas_de_carros_lista[4]);
console.log(Marcas_de_carros_lista[5]);
// Acessando cada objeto da lista Marcas_de_carros_lista.

console.log(Marcas_de_carros_lista[0].marca);
console.log(Marcas_de_carros_lista[1].pais);
console.log(Marcas_de_carros_lista[2].Carro_famoso);
console.log(Marcas_de_carros_lista[3].carro_mais_rapido_le_mais);
// Acessando uma propriedade especifica de cada objeto da lista Marcas_de_carros_lista.

console.log(Marcas_de_carros_lista[0].marca[1]);
console.log(Marcas_de_carros_lista[1].pais[5]);
console.log(Marcas_de_carros_lista[2].Carro_famoso[2]);
console.log(Marcas_de_carros_lista[3].carro_mais_rapido_le_mais);
// Acessando um caractere especifico de uma propriedade especifica de cada objeto da lista Marcas_de_carros_lista.
