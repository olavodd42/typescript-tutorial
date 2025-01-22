function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }

// define uma função que retorna um par de valores, um string e um número
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]