interface Point {
    x: number;
    y: number;
  }
   
// Define que os atributos de Point são opcionais
let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
  
console.log(pointPart);