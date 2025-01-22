type Primitive = string | number | boolean;

// Define que o valor não pode ser uma string
const value: Exclude<Primitive, string> = true;

console.log(typeof value);