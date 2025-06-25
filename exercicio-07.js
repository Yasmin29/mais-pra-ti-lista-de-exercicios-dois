// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

function obterNomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice() 
    .sort((a, b) => a.preco - b.preco) 
    .map(produto => produto.nome); 
}

const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 },
  { nome: "Cadeira", preco: 300 },
];

const nomesOrdenados = obterNomesOrdenadosPorPreco(produtos);
console.log(nomesOrdenados);