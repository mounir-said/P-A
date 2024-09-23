// Shuffle: Shuffle array values in-place
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]; // Swap
  }
  return arr; // Optionally return the array
}

// Remove Range: Remove elements from index `start` to `end` in-place
function removeRange(arr, start, end) {
  for (let i = start; i <= end; i++) {
      for (let j = start; j < arr.length - 1; j++) {
          arr[j] = arr[j + 1]; // Shift values left
      }
      arr.pop(); // Remove last element
  }
  return arr; // Return the modified array
}

// Intermediate Sums: Add sum of every 10 elements
function intermediateSums(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      count++;
      if (count === 10) {
          arr.splice(i + 1, 0, sum); // Insert sum after every 10th element
          i++;
          count = 0;
          sum = 0;
      }
  }
  // Handle remaining elements
  if (count > 0) {
      arr.push(sum);
  }
  return arr;
}

// Double Trouble: Duplicate each element in-place
function doubleTrouble(arr) {
  let originalLength = arr.length;
  for (let i = 0; i < originalLength; i += 2) {
      arr.splice(i, 0, arr[i]); // Insert duplicate before each element
      i++;
  }
  return arr;
}

// Zip It: Combine two arrays into a new array by alternating values
function zipIt(arr1, arr2) {
  let zippedArr = [];
  let len = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < len; i++) {
      if (i < arr1.length) {
          zippedArr.push(arr1[i]);
      }
      if (i < arr2.length) {
          zippedArr.push(arr2[i]);
      }
  }
  return zippedArr;
}

// Zip It (in-place): Combine arr2 values into arr1 by alternating values
function zipItInPlace(arr1, arr2) {
  let len = Math.max(arr1.length, arr2.length);
  let i = 0;
  let j = 0;

  while (i < len) {
      if (j < arr2.length) {
          arr1.splice(i + 1, 0, arr2[j]); // Insert arr2's value at alternating positions
          j++;
      }
      i += 2; // Move forward skipping the newly inserted element
  }
  if (j < arr2.length) {
      arr1.push(...arr2.slice(j)); // Append any remaining elements from arr2
  }
  return arr1;
}

// Test cases:

console.log("Shuffle Example:");
console.log(shuffle([1, 2, 3, 4, 5]));

console.log("Remove Range Example:");
console.log(removeRange([20, 30, 40, 50, 60, 70], 2, 4)); // [20,30,70]

console.log("Intermediate Sums Example:");
console.log(intermediateSums([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2])); // [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6]

console.log("Double Trouble Example:");
console.log(doubleTrouble([4, "Ulysses", 42, false])); // [4,4,'Ulysses','Ulysses',42,42,false,false]

console.log("Zip It Example:");
console.log(zipIt([1, 2], [10, 20, 30, 40])); // [1,10,2,20,30,40]

console.log("Zip It In-Place Example:");
let arr1 = [1, 2];
let arr2 = [10, 20, 30, 40];
console.log(zipItInPlace(arr1, arr2)); // [1,10,2,20,30,40]
