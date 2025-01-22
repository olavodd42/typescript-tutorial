function printMileage(mileage: number | null | undefined) {
    // O tipo de mileage é number | null | undefined
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
  }
              
  printMileage(null); // Prints 'Mileage: Not Available'
  
  printMileage(0); // Prints 'Mileage: 0'