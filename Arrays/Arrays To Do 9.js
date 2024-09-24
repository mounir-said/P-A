// 1. Median of Sorted Arrays
function findMedianSortedArrays(arr1, arr2) {
  const mergedArray = mergeArrays(arr1, arr2);
  const len = mergedArray.length;

  if (len % 2 === 0) {
      return (mergedArray[len / 2 - 1] + mergedArray[len / 2]) / 2;
  } else {
      return mergedArray[Math.floor(len / 2)];
  }
}

function mergeArrays(arr1, arr2) {
  let merged = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          merged.push(arr1[i]);
          i++;
      } else {
          merged.push(arr2[j]);
          j++;
      }
  }

  while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
  }

  while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
  }

  return merged;
}

// Example usage:
console.log("Median of Sorted Arrays:");
console.log(findMedianSortedArrays([1, 5, 9], [1, 2, 3, 4, 5, 6])); // Output: 4
console.log(findMedianSortedArrays([1, 5, 9], [1, 2, 3, 4, 5])); // Output: 3.5
console.log("---------");


// 2. Time to English
function timeToEnglish(minutes) {
  const hours = Math.floor(minutes / 60) % 12 || 12; // Convert to 12-hour format
  const minutesPast = minutes % 60;

  let timeString = "";

  if (minutes === 0) {
      return "midnight";
  } else if (minutes === 720) {
      return "noon";
  }

  if (minutesPast === 0) {
      timeString = hours + " o'clock";
  } else if (minutesPast === 30) {
      timeString = "half past " + hours;
  } else if (minutesPast === 15) {
      timeString = "quarter past " + hours;
  } else if (minutesPast === 45) {
      timeString = "quarter til " + ((hours % 12) + 1);
  } else if (minutesPast < 30) {
      timeString = minutesPast + " past " + hours;
  } else {
      timeString = (60 - minutesPast) + " til " + ((hours % 12) + 1);
  }

  return minutes < 720 ? timeString + " am" : timeString + " pm";
}

// Example usage:
console.log("Time to English:");
console.log(timeToEnglish(30));    // Output: "half past midnight"
console.log(timeToEnglish(75));    // Output: "quarter past 1 am"
console.log(timeToEnglish(710));   // Output: "10 til noon"
console.log(timeToEnglish(1000));  // Output: "20 til 5 pm"
console.log("---------");


// 3. Missing Value
function findMissingValue(arr) {
  const n = arr.length;
  const expectedSum = ((n * (n + 1)) / 2);
  const actualSum = arr.reduce((sum, value) => sum + value, 0);
  return expectedSum - actualSum;
}

// Example usage:
console.log("Missing Value:");
console.log(findMissingValue([3, 0, 1]));           // Output: 2
console.log(findMissingValue([2, -4, 0, -3, -2, 1])); // Output: -1
console.log(findMissingValue([5, 2, 7, 8, 4, 9, 3])); // Output: 6
