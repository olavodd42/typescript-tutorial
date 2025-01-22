class Person {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
        
  const person = new Person("Jane");
  
  // name não é acessível porque é privado
  console.log(person.getName());