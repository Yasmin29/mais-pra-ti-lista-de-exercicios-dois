// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), 
// use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

let novoArray = []
 
function extrairPalavas(palavras){
    let array = palavras.split(' ')
    console.log(array)
    for(i = 0; i < array.length; i++){
        if(!novoArray.includes(array[i])){
            novoArray.push(array[i])
        }  
    }

    return novoArray
}

console.log(extrairPalavas('olá olá olá mundo mundo mundo bom mundo olá'))