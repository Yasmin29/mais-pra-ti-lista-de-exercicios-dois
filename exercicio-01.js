// Seção 1: Estruturas de Controle Avançadas
// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) 
// que retorne true se os valores
// formarem uma data real 
// (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.
//Validar se o ano é bissexto, se ele for o mês 2 vai até dia 29
//Se não ele vai até dia 28

function ehDataValida(dia, mes, ano){
    if(mes <= 12 & mes >= 1) { 
        if(mes != 2){ 
            if(dia > 0 & dia <= 31 ){ 
                return true
            } else {
                return false
            }
        } else if(mes === 2){ 
            if(ano % 4 === 0){
                if(dia <= 29 & dia >= 1){
                    return true
                } else {
                    return false
                }
            } else {
                if(dia <= 28 & dia >= 1) {
                    return true
                } else {
                    return false
                }
            }

        }
    } else {
        return false
    }
    
}


console.log(ehDataValida(1, 1, 1996))