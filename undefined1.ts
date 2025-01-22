interface House {
    sqft: number;
    yard?: {
      sqft: number;
    };
  }
              
  function printYardSize(house: House) {
    // O tipo de house.yard é { sqft: number } | undefined
    const yardSize = house.yard?.sqft;
  
    if (yardSize === undefined) {
      console.log('No yard');
    } else {
      console.log(`Yard is ${yardSize} sqft`);
    }
  }
              
  let home: House = {
    sqft: 500
  };
              
  printYardSize(home); // Prints 'No yard'