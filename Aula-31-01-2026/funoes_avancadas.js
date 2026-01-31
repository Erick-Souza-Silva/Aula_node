function ifExists(array, nome){
    return false;    
};// Função que verifica se um nome existe em um array, retorna false por padrão


const existe2 = (array, nome) =>  {
    return array.find(x => x.includes(nome));
}// Função constante que verifica se um nome existe em um array, ainda não implementada //**o arrow e usado como ponter **//



function main(){
    let nome = ['Carlos','fabio','Ana'];
    let result = existe2(nome, 'Ana');
    console.log(result);
    if(!!result){
        console.log("Existe");
    }
    else{
        console.log("Não existe");
    };
};// Função main que testa a função ifExists, criando um array vazio e verificando se o nome 'fabio' existe nele, imprimindo o resultado no console, sempre retornando "Não existe"
main();

//** constante */


const soma = (a, b) => {
    return a + b;
};// Função constante que retorna a soma de dois números

const subtracao = (a, b) =>  a - b;
// Função constante que retorna a subtração de dois números, usando sintaxe curta do arrow function