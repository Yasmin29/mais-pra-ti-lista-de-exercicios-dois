// Seção 1: Estruturas de Controle Avançadas
// 2. Jogo de Adivinhação
// Escreva um script que gere um 
// número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. 
// Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

function gerarNumero(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min 
}
function adivinharNumero(){
    const prompt = require('prompt-sync')()
    let numeroDeEntrada = 1
    let numeroRandomico = gerarNumero(1,100)
    console.log(numeroRandomico)
    while(numeroDeEntrada != numeroRandomico){
        numeroDeEntrada = Number(prompt('Adivinhe o número! Digite qual o número:'))
        if(numeroDeEntrada < numeroRandomico){
            console.log('Mais alto!')
        } else if(numeroDeEntrada > numeroRandomico ){
            console.log('Mais baixo!')
        }
    }
}
adivinharNumero()
