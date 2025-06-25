// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) { 
  let timeoutId; 

  return function(...args) { 
	if (!timeoutId) {
      console.log("Função chamada novamente antes do tempo. Cancelando execução anterior.");
    }
  
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {//
      fn.apply(this, args);
    }, delay);
  };
}


function salvarBusca(termo) {
  console.log("Buscando por:", termo);
}

const buscaDebounce = debounce(salvarBusca, 1000);

buscaDebounce("a");
buscaDebounce("ab");
buscaDebounce("abc");
