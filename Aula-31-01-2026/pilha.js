
function getPilha(){
     return [ 1 , 2 , 3 , 4 , 5 ];
}

const empilha = (array,num) => array.push(num); // Função constante que adiciona um número ao final de um array, o push modifica o array original

const getTopo = (array) => array[array.length - 1]; // Função constante que retorna o último elemento de um array sem removê-lo
 
const desempilha = (array) => array.pop(); // Função constante que remove o último elemento de um array e o retorna, o pop modifica o array original

function modificador(a){
    a = 2;
    return a;
}

function main(){
    
    let pilha = getPilha();
    
    let a = 0;
    
    empilha(pilha,a);
    
    desempilha(pilha);
    console.log(pilha);
}
main();

