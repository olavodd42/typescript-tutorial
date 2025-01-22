// define uma instância de NamedValue que armazena uma variavel de qualquer tipo, mas como padrão string
class NamedValue<T = string> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value = new NamedValue('myNumber');
  value.setValue('myValue');
  console.log(value.toString());