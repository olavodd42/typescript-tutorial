interface Car {
    make: string;
    model: string;
    mileage?: number;
  }

  // Define que os atributos de Car são obrigatórios
  let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
  };
  
  console.log(myCar);