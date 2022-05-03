
// reduce soma números de array
/**
    function somaNumeros(arr) {
        return arr.reduce(function(prev, current) {
            return prev + current;
        })
    }
    
    const arr = [1, 2];
    
    console.log(somaNumeros(arr));
*/

// saldo disponível e restante após valores de produtos subtraídos
const lista = [
    {
        name: 'sabão em pó',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30
    }
];

const saldoDisponível = 100;

function calculaSaldo(saldoDisponível, lista) {
    return lista.reduce(function(prev, current, index){
        console.log('rodada ', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponível)
}

console.log(calculaSaldo(saldoDisponível, lista));
