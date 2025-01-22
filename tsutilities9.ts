interface Person {
    name: string;
    age: number;
}

// Define que a instância de Person é somente leitura
const person: Readonly<Person> = {
    name: "Dylan",
    age: 35,
};

person.name = 'Israel';