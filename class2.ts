interface Shape {
    getArea: () => number;
}
// A classe implementa a interface Shape
class Rectangle implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  
    public toString(): string {
      return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
  }
  
  // A classe Square extende a classe Rectangle
  class Square extends Rectangle {
    public constructor(width: number) {
      super(width, width);
    }
  
    // sobrescreve o método toString
    public override toString(): string {
      return `Square[width=${this.width}]`;
    }
  }
  
    // getArea gets inherited from Rectangle
  const myRect = new Rectangle(10,20);
  
  console.log(myRect.toString());

  const mySq = new Square(20);

console.log(mySq.toString());