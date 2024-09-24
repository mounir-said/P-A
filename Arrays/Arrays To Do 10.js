// Function to determine the last digit of A to the B
function lastDigitAtoB(a, b) {
  if (b === 0) return 1; // Any number to the power of 0 is 1
  if (a === 0) return 0; // 0 to any positive power is 0

  // Reduce a to its last digit
  a = a % 10;

  // Find the effective exponent (a^b mod 10)
  const cycle = [a];
  let temp = a;
  
  for (let i = 1; i < 10; i++) {
      temp = (temp * a) % 10;
      if (temp === a) break;
      cycle.push(temp);
  }

  // The cycle length
  const cycleLength = cycle.length;
  const effectiveExponent = (b % cycleLength) || cycleLength; // if b % cycleLength is 0, use cycleLength

  return cycle[effectiveExponent - 1]; // -1 because of 0 indexing
}

// Function to search for a small matrix within a larger matrix
function matrixSearch(bigMatrix, smallMatrix) {
  const bigRows = bigMatrix.length;
  const bigCols = bigMatrix[0].length;
  const smallRows = smallMatrix.length;
  const smallCols = smallMatrix[0].length;

  for (let i = 0; i <= bigRows - smallRows; i++) {
      for (let j = 0; j <= bigCols - smallCols; j++) {
          let found = true;

          for (let k = 0; k < smallRows; k++) {
              for (let l = 0; l < smallCols; l++) {
                  if (bigMatrix[i + k][j + l] !== smallMatrix[k][l]) {
                      found = false;
                      break;
                  }
              }
              if (!found) break;
          }

          if (found) return [i, j]; // Return the top-left corner of the match
      }
  }
  return [-1, -1]; // No match found
}

// Function to find the maximum sum of a contiguous subarray
function maxSubarraySum(arr) {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (let num of arr) {
      maxEndingHere += num;
      
      if (maxEndingHere < 0) {
          maxEndingHere = 0; // Reset if negative
      }
      
      if (maxEndingHere > maxSoFar) {
          maxSoFar = maxEndingHere; // Update max
      }
  }

  return maxSoFar;
}

// Example usages
console.log("Last Digit of A^B:");
console.log(lastDigitAtoB(3, 4)); // Output: 1
console.log(lastDigitAtoB(12, 5)); // Output: 2
console.log(lastDigitAtoB(237, 124)); // Output: 9 (last digit of 237^124)

console.log("\nMatrix Search:");
const bigMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const smallMatrix = [
  [6, 7],
  [10, 11]
];

console.log(matrixSearch(bigMatrix, smallMatrix)); // Output: [1, 1]

console.log("\nMax Subarray Sum:");
console.log(maxSubarraySum([1, 2, -4, 3, -2, 3, -1])); // Output: 4 (subarray [3, -2, 3])
console.log(maxSubarraySum([-1, -2, -4, -3, -2, -3])); // Output: 0 (for [])
