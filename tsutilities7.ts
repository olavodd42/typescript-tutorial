type PointGenerator = () => { x: number; y: number; };

// Extrai o tipo de retorno da função
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};