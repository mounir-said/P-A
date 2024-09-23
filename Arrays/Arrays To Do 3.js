// Remove Negatives
function removeNegatives(arr) {
  let newLength = 0;
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
          arr[newLength] = arr[i];
          newLength++;
      }
  }
  
  arr.length = newLength; // Truncate the array
  return arr;
}

// Second-to-Last
function secondToLast(arr) {
  if (arr.length < 2) {
      return null;
  }
  return arr[arr.length - 2];
}

// Second-Largest
function secondLargest(arr) {
  if (arr.length < 2) {
      return null;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
          secondLargest = largest;
          largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] != largest) {
          secondLargest = arr[i];
      }
  }

  return secondLargest;
}

// Nth-to-Last
function nthToLast(arr, n) {
  if (n > arr.length || n <= 0) {
      return null;
  }
  return arr[arr.length - n];
}

// Nth-Largest
function nthLargest(arr, n) {
  if (n > arr.length || n <= 0) {
      return null;
  }

  let sorted = [];
  for (let i = 0; i < arr.length; i++) {
      sorted.push(arr[i]);
  }

  // Bubble Sort (or use any other sorting algorithm)
  for (let i = 0; i < sorted.length - 1; i++) {
      for (let j = 0; j < sorted.length - i - 1; j++) {
          if (sorted[j] < sorted[j + 1]) {
              let temp = sorted[j];
              sorted[j] = sorted[j + 1];
              sorted[j + 1] = temp;
          }
      }
  }

  return sorted[n - 1];
}

// Skyline Heights
function skylineHeights(arr) {
  let visibleBuildings = [];
  let maxHeight = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0 && arr[i] > maxHeight) {
          visibleBuildings.push(arr[i]);
          maxHeight = arr[i];
      }
  }

  return visibleBuildings;
}

// Test cases
console.log("Remove Negatives:");
console.log(removeNegatives([1, -2, 3, -4, 5])); // => [1, 3, 5]
console.log(removeNegatives([-1, -2, -3])); // => []

console.log("\nSecond-to-Last:");
console.log(secondToLast([42, true, 4, "Kate", 7])); // => "Kate"
console.log(secondToLast([42])); // => null

console.log("\nSecond-Largest:");
console.log(secondLargest([42, 1, 4, Math.PI, 7])); // => 7
console.log(secondLargest([42])); // => null

console.log("\nNth-to-Last:");
console.log(nthToLast([5, 2, 3, 6, 4, 9, 7], 3)); // => 4
console.log(nthToLast([5, 2], 3)); // => null

console.log("\nNth-Largest:");
console.log(nthLargest([42, 1, 4, Math.PI, 7], 2)); // => 7
console.log(nthLargest([3, 1, 5, 2, 4], 1)); // => 5
console.log(nthLargest([3], 2)); // => null

console.log("\nSkyline Heights:");
console.log(skylineHeights([-1, 1, 1, 7, 3])); // => [1, 7]
console.log(skylineHeights([0, 4])); // => [4]
