// Define que a chave do objeto deve ser uma string que começa com "dynamic_"
type DynamicObject = { [key: string as `dynamic_${string}`]: string };

let obj: DynamicObject = { dynamic_key: "value" };

console.log(obj);