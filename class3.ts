// Define uma classe abstrata que serve como template para outras classes
abstract class Polygon {
    public abstract getArea(): number;
  
    public toString(): string {
      return `Polygon[area=${this.getArea()}]`;
    }
  }
  
  class Rectangle extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
      super();
    }
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
  const myRect = new Rectangle(10,20);
  
  console.log(myRect.getArea());