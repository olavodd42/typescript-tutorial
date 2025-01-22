// define um objeto com propriedades nao definidas inicialmente
const nameAgeMap: { [index: string]: number } = {};

nameAgeMap.Jack = 25; // no error

//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

console.log(nameAgeMap);