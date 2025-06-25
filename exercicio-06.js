// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("Resultado recuperado do cache para:", args);
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    console.log("Resultado calculado e armazenado no cache para:", args);
    return result;
  };
}

function fatorial(n) {
  console.log("Calculando fatorial de", n);
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}

const fatorialMemo = memoize(fatorial);

console.log(fatorialMemo(5));
console.log(fatorialMemo(5));
console.log(fatorialMemo(6)); 