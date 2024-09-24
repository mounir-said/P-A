function optimalTacoTruckLocation(customers) {
  // Helper function to calculate the median of an array
  function median(arr) {
      arr.sort((a, b) => a - b);
      const mid = Math.floor(arr.length / 2);
      if (arr.length % 2 === 0) {
          return (arr[mid - 1] + arr[mid]) / 2;
      } else {
          return arr[mid];
      }
  }

  // Extract the x and y coordinates from the customers array
  const xCoords = customers.map(customer => customer[0]);
  const yCoords = customers.map(customer => customer[1]);

  // Calculate the medians of the x and y coordinates
  const optimalX = median(xCoords);
  const optimalY = median(yCoords);

  // Return the optimal location
  return [optimalX, optimalY];
}

// Example usage:
const customers = [[10, 0], [-1, -10], [2, 4]];
console.log("Optimal Taco Truck Location:", optimalTacoTruckLocation(customers));
