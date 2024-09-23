// Reverse
function reverse(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
      // Swap the elements at left and right indices
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      
      // Move pointers inward
      left++;
      right--;
  }

  return arr;
}

// Rotate
function rotateArr(arr, shiftBy) {
  let len = arr.length;

  // Normalize the shift to handle large shifts and negatives
  shiftBy = shiftBy % len;
  if (shiftBy < 0) {
      shiftBy += len;  // Convert negative shifts to positive equivalent
  }

  // Reverse helper function
  function reverseSubarray(start, end) {
      while (start < end) {
          let temp = arr[start];
          arr[start] = arr[end];
          arr[end] = temp;
          start++;
          end--;
      }
  }

  // Step 1: Reverse the entire array
  reverseSubarray(0, len - 1);

  // Step 2: Reverse the first 'shiftBy' elements
  reverseSubarray(0, shiftBy - 1);

  // Step 3: Reverse the rest of the elements
  reverseSubarray(shiftBy, len - 1);

  return arr;
}

// Filter Range
function filterRange(arr, min, max) {
  let newLength = 0;  // This will keep track of where the next valid value goes

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= min && arr[i] <= max) {
          arr[newLength] = arr[i];  // Move valid element to the "new" array position
          newLength++;
      }
  }

  arr.length = newLength;  // Truncate the array to the new length
  return arr;
}

// Concat
function arrConcat(arr1, arr2) {
  let newArr = [];
  
  // Add all elements from the first array
  for (let i = 0; i < arr1.length; i++) {
      newArr[newArr.length] = arr1[i];
  }

  // Add all elements from the second array
  for (let i = 0; i < arr2.length; i++) {
      newArr[newArr.length] = arr2[i];
  }

  return newArr;
}

// Test Cases

console.log("Reverse:");
console.log(reverse([1, 2, 3, 4]));  // => [4, 3, 2, 1]
console.log(reverse([7, 5, 9, 6]));  // => [6, 9, 5, 7]

console.log("\nRotate:");
console.log(rotateArr([1, 2, 3, 4, 5], 2));  // => [4, 5, 1, 2, 3]
console.log(rotateArr([1, 2, 3], -1));  // => [2, 3, 1]

console.log("\nFilter Range:");
console.log(filterRange([1, 3, 5, 7, 9], 3, 7));  // => [3, 5, 7]
console.log(filterRange([10, 20, 30, 40], 15, 35));  // => [20, 30]

console.log("\nConcat:");
console.log(arrConcat(['a', 'b'], [1, 2]));  // => ['a', 'b', 1, 2]
console.log(arrConcat([true, false], ['yes', 'no']));  // => [true, false, 'yes', 'no']
