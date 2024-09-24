// Function to reverse a string
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
  }
  return reversed;
}

// Function to remove even-length strings from an array
function removeEvenLengthStrings(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].length % 2 !== 0) { // Check if the string length is odd
          result.push(arr[i]);
      }
  }
  return result;
}

// Function to convert an integer to Roman numerals
function integerToRoman(num) {
  const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
  ];
  
  let result = '';
  for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
          result += romanNumerals[i].numeral;
          num -= romanNumerals[i].value;
      }
  }
  return result;
}

// Function to convert a Roman numeral to an integer
function romanToInteger(roman) {
  const romanValues = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };
  
  let total = 0;
  for (let i = 0; i < roman.length; i++) {
      const current = romanValues[roman[i]];
      const next = romanValues[roman[i + 1]];

      if (next && current < next) {
          total -= current; // Subtract if current value is less than the next
      } else {
          total += current; // Otherwise add the value
      }
  }
  return total;
}

// Example usages
console.log("Reverse:");
console.log(reverseString("creature")); // Output: "erutaerc"

console.log("\nRemove Even-Length Strings:");
console.log(removeEvenLengthStrings(["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with", "C)", "."])); // Output: ["Nope!", "Its", "Chris", "."]

console.log("\nInteger to Roman Numerals:");
console.log(integerToRoman(4));    // Output: "IV"
console.log(integerToRoman(349));  // Output: "CCCXLIX"
console.log(integerToRoman(444));  // Output: "CDXLIV"

console.log("\nRoman Numerals to Integer:");
console.log(romanToInteger("III"));     // Output: 3
console.log(romanToInteger("DCIX"));    // Output: 609
console.log(romanToInteger("MXDII"));   // Output: 1492
