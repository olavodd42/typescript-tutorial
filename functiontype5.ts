// define um parametro rest, que é um array de valores
function add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }
  
  console.log(add(10,10,10,10,10));