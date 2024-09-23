function minToFront(arr) {
  if (arr.length === 0) return arr;  // Return if array is empty

  let minIndex = 0;  // Start with the assumption that the first element is the smallest

  // Find the index of the smallest element
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
          minIndex = i;
      }
  }

  // Save the minimum element
  let minValue = arr[minIndex];

  // Shift elements to the right from minIndex to the beginning of the array
  for (let i = minIndex; i > 0; i--) {
      arr[i] = arr[i - 1];
  }

  // Place the minimum value at the front
  arr[0] = minValue;

  return arr;
}

// Test cases
console.log(minToFront([4, 2, 1, 3, 5]));  // => [1, 4, 2, 3, 5]
console.log(minToFront([10, 8, 12, 2, 6, 3]));  // => [2, 10, 8, 12, 6, 3]
console.log(minToFront([7]));  // => [7] (only one element)
console.log(minToFront([]));  // => [] (empty array)
