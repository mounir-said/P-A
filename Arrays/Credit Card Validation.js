function isCreditCardValid(digitArr) {
  if (digitArr.length < 13 || digitArr.length > 19) {
      return false; // Card numbers must be between 13 and 19 digits
  }

  // Step 1: Remove the last digit
  const checkDigit = digitArr[digitArr.length - 1];
  let sum = 0;

  // Step 2: Loop through the digits, starting from the second-to-last (odd position)
  for (let i = digitArr.length - 2; i >= 0; i--) {
      let value = digitArr[i];

      // Step 3: Double the digits in odd positions
      if ((digitArr.length - i) % 2 === 0) {
          value *= 2;
          // Step 4: If any result is greater than 9, subtract 9
          if (value > 9) {
              value -= 9;
          }
      }

      // Add value to sum
      sum += value;
  }

  // Step 5: Add the last digit back in and check if the total is a multiple of 10
  sum += checkDigit;
  return sum % 10 === 0;
}

// Test cases
console.log(isCreditCardValid([5, 2, 2, 8, 2])); // true
console.log(isCreditCardValid([4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6])); // false
console.log(isCreditCardValid([4, 9, 1, 6, 2, 7, 3, 4, 1, 2, 6, 8, 4])); // true
