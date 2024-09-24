// Array: Binary Search
function binarySearchArray(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === value) {
          return true;  // Value found
      } else if (arr[mid] < value) {
          left = mid + 1;  // Search right half
      } else {
          right = mid - 1;  // Search left half
      }
  }
  return false;  // Value not found
}

// Example usage of binarySearchArray
const arr1 = [1, 3, 5, 7, 9, 11, 13];
console.log("Array Binary Search:");
console.log(binarySearchArray(arr1, 5));  // Output: true
console.log(binarySearchArray(arr1, 4));  // Output: false
console.log("---------");


// Min of Sorted-Rotated Array
function findMinInRotated(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
      const mid = Math.floor((left + right) / 2);
      
      // If mid element is greater than right, the minimum must be on the right side
      if (arr[mid] > arr[right]) {
          left = mid + 1;
      } else {
          right = mid;  // Otherwise, the minimum is on the left side
      }
  }
  return arr[left];  // Left will point to the minimum element
}

// Example usage of findMinInRotated
const names = ["Gigli", "Jay is cool", "Mavis", "Phoebe", "Thurber", "Anna", "Celeste", "Elon"];
console.log("Min of Sorted-Rotated Array:");
console.log(findMinInRotated(names));  // Output: "Anna"
console.log("---------");


// String: Binary Search
function binarySearchString(str, char) {
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midChar = str[mid];

      if (midChar === char) {
          return true;  // Character found
      } else if (midChar < char) {
          left = mid + 1;  // Search right half
      } else {
          right = mid - 1;  // Search left half
      }
  }
  return false;  // Character not found
}

// Example usage of binarySearchString
const str = " &-0379DEFXZ[abcz|";
console.log("String Binary Search:");
console.log(binarySearchString(str, '6'));  // Output: false
console.log(binarySearchString(str, 'c'));  // Output: true
