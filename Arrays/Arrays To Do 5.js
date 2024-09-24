// Function to calculate the average of an array
function calculateAverage(arr) {
  if (arr.length === 0) return 0;

  let sum = 0;
  for (let num of arr) {
      sum += num;
  }
  return sum / arr.length;
}

// Function to check if there's a balance point between indices
function hasBalancePoint(arr) {
  const totalSum = arr.reduce((acc, val) => acc + val, 0);

  let leftSum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
      leftSum += arr[i];
      let rightSum = totalSum - leftSum - arr[i + 1];
      if (leftSum === rightSum) {
          return true;
      }
  }
  return false;
}

// Function to find the balance index
function findBalanceIndex(arr) {
  const totalSum = arr.reduce((acc, val) => acc + val, 0);

  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
      let rightSum = totalSum - leftSum - arr[i];
      if (leftSum === rightSum) {
          return i;
      }
      leftSum += arr[i];
  }
  return -1;
}

// Test cases
const arr1 = [1, 2, 3, 4, 5];
console.log("Average:", calculateAverage(arr1)); // Output: Average: 3

const arr2 = [1, 2, 3, 4, 10];
const arr3 = [1, 2, 4, 2, 1];
console.log("Balance Point (arr2):", hasBalancePoint(arr2)); // Output: true
console.log("Balance Point (arr3):", hasBalancePoint(arr3)); // Output: false

const arr4 = [-2, 5, 7, 0, 3];
const arr5 = [9, 9];
console.log("Balance Index (arr4):", findBalanceIndex(arr4)); // Output: 2
console.log("Balance Index (arr5):", findBalanceIndex(arr5)); // Output: -1
