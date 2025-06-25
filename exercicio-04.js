// Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.
let  total = 1
function fatorial(n){
    if(n < 0){
        throw new Error("O valor de fatorial deve ser maior ou igual a 0")
    }
    else if (n === 0){
        return 1
    } else  {
        total *= n
        fatorial(n - 1)
        return total
    }

}

console.log(fatorial(-1))
