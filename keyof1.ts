interface Person {
    name: string;
    age: number;
  }
  
  // keyof extrai a chave de um tipo
  function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
  }
  
  let person = {
    name: "Max",
    age: 27
  };
  
  printPersonProperty(person, "name");