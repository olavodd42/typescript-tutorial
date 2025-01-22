type Negate = (value: number) => number;

// define uma aliás para a função
const negateFunction: Negate = (value) => value * -1;

console.log(negateFunction(10));