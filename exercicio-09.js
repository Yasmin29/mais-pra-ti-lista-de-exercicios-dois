// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

function paresParaObjeto(pares) {
  const obj = {};
  for (let i = 0; i < pares.length; i++) {
    const chave = pares[i][0];
    const valor = pares[i][1];
    obj[chave] = valor;
  }
  return obj;
}

function objetoParaPares(obj) {
  const pares = [];
  for (const chave in obj) {
    pares.push([chave, obj[chave]]);
  }
  return pares;
}

const pares = [
  ["nome", "João"],
  ["idade", 30],
  ["cidade", "São Paulo"]
];

const obj = paresParaObjeto(pares);
console.log(obj);

const paresDeVolta = objetoParaPares(obj);
console.log(paresDeVolta);