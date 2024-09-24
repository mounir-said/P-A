// Function to remove blanks from a string
function removeBlanks(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
          result += str[i];
      }
  }
  return result;
}

// Function to extract digits from a string and return them as an integer
function getDigits(str) {
  let digits = '';
  for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i]) && str[i] !== ' ') {
          digits += str[i];
      }
  }
  return Number(digits);
}

// Function to create an acronym from a string
function acronym(str) {
  let result = '';
  let shouldCapitalize = true;

  for (let i = 0; i < str.length; i++) {
      if (shouldCapitalize && str[i] !== ' ') {
          result += str[i].toUpperCase();
          shouldCapitalize = false; // Next character after a non-space is not the start of a new word
      }
      if (str[i] === ' ') {
          shouldCapitalize = true; // Next character could start a new word
      }
  }

  return result;
}

// Function to count non-space characters in a string
function countNonSpaces(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
          count++;
      }
  }
  return count;
}

// Function to remove shorter strings from an array
function removeShorterStrings(arr, minLength) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].length >= minLength) {
          result.push(arr[i]);
      }
  }
  return result;
}

// Example usages
console.log("Remove Blanks:");
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c ")); // Output: "PlayThatFunkyMusic"
console.log(removeBlanks("I can not BELIEVE it's not BUTTER")); // Output: "IcannotBELIEVEit'snotBUTTER"

console.log("\nGet Digits:");
console.log(getDigits("abc8c0d1ngd0j0!8")); // Output: 801008
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); // Output: 1357924680

console.log("\nAcronyms:");
console.log(acronym(" there's no free lunch - gotta pay yer way. ")); // Output: "TNFL-GPYW"
console.log(acronym("Live from New York, it's Saturday Night!")); // Output: "LFNYISN"

console.log("\nCount Non-Spaces:");
console.log(countNonSpaces("Honey pie, you are driving me crazy")); // Output: 29
console.log(countNonSpaces("Hello world !")); // Output: 11

console.log("\nRemove Shorter Strings:");
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)); // Output: ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)); // Output: ['There', 'bug', 'the', 'system']
