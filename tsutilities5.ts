interface Person {
    name: string;
    age: number;
    location?: string;
  }
        
  // Define que apenas o atributo name deve ser definido
  const bob: Pick<Person, 'name'> = {
    name: 'Bob'
  };
  
  console.log(bob);