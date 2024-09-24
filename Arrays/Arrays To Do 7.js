// 1. Flatten

// (First: non-mutating)
function flatten(arr) {
  return arr.reduce((acc, val) => {
      return acc.concat(Array.isArray(val) ? flatten(val) : val);
  }, []);
}

// (Second: in-place, mutating, but can alter order)
function flattenInPlace(arr) {
  let i = 0;
  while (i < arr.length) {
      if (Array.isArray(arr[i])) {
          arr.splice(i, 1, ...arr[i]); // Flatten in-place
      } else {
          i++;
      }
  }
  return arr;
}

// (Third: in-place and stable)
function flattenInPlaceStable(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          const flatPart = flattenInPlaceStable(arr[i]);
          arr.splice(i, 1, ...flatPart);
          i += flatPart.length - 1;
      }
  }
  return arr;
}

// Example usage:
console.log("Flatten:");
const arr1 = [1, [2, 3], 4, []];
console.log(flatten(arr1));  // Output: [1, 2, 3, 4]
console.log(flattenInPlace([1, [2, 3], 4, []]));  // Output: [1, 2, 3, 4]
console.log(flattenInPlaceStable([1, [2, 3], 4, []]));  // Output: [1, 2, 3, 4]
console.log("---------");


// 2. Remove Duplicates

// (First: non-mutating, stable)
function removeDuplicates(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

// (Second: in-place, unstable)
function removeDuplicatesInPlace(arr) {
  let i = 0;
  while (i < arr.length) {
      if (arr.indexOf(arr[i]) !== i) {
          arr.splice(i, 1);
      } else {
          i++;
      }
  }
  return arr;
}

// (Third: in-place and stable)
function removeDuplicatesInPlaceStable(arr) {
  const seen = new Set();
  let writeIndex = 0;
  for (let i = 0; i < arr.length; i++) {
      if (!seen.has(arr[i])) {
          seen.add(arr[i]);
          arr[writeIndex++] = arr[i];
      }
  }
  arr.length = writeIndex;  // Trim the array
  return arr;
}

// (Fourth: eliminate second loop)
function removeDuplicatesNoInnerLoop(arr) {
  const seen = new Set();
  return arr.filter(el => !seen.has(el) && seen.add(el));
}

// Example usage:
console.log("Remove Duplicates:");
const arr2 = [1, 2, 1, 3, 4, 2];
console.log(removeDuplicates(arr2));  // Output: [1, 2, 3, 4]
console.log(removeDuplicatesInPlace([1, 2, 1, 3, 4, 2]));  // Output: [1, 2, 4, 3]
console.log(removeDuplicatesInPlaceStable([1, 2, 1, 3, 4, 2]));  // Output: [1, 2, 3, 4]
console.log(removeDuplicatesNoInnerLoop([1, 2, 1, 3, 4, 2]));  // Output: [1, 2, 3, 4]
console.log("---------");


// 3. Mode

function findMode(arr) {
  const countMap = {};
  let maxCount = 0;
  let mode = null;

  for (const num of arr) {
      countMap[num] = (countMap[num] || 0) + 1;
      if (countMap[num] > maxCount) {
          maxCount = countMap[num];
          mode = num;
      }
  }
  return mode;
}

// (Second: memory constraint - no extra array)
function findModeNoExtraMemory(arr) {
  let mode = arr[0];
  let maxCount = 0
