// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

function agruparPorCliente(vendas) {
  return vendas.reduce(function (resultado, venda) {
    const cliente = venda.cliente;
    const total = venda.total;

    resultado[cliente] = resultado[cliente] || 0;

    resultado[cliente] += total;

    return resultado;
  }, {});
}

const vendas = [
  { cliente: "João", total: 100 },
  { cliente: "Maria", total: 200 },
  { cliente: "João", total: 150 },
  { cliente: "Maria", total: 50 },
  { cliente: "Ana", total: 300 }
];

const resultado = agruparPorCliente(vendas);
console.log(resultado);
