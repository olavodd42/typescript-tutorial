type PointPrinter = (p: { x: number; y: number; }) => void;

// Extrai o tipo do parâmetro da função
const point: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};