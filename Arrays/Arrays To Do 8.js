// 1. Smarter Sum
function iSigma(num) {
  // Using the formula for the sum of the first n integers: n(n + 1) / 2
  return (num * (num + 1)) / 2;
}

// Example usage:
console.log("Smarter Sum:");
console.log(iSigma(1));  // Output: 1
console.log(iSigma(2));  // Output: 3
console.log(iSigma(3));  // Output: 6
console.log(iSigma(4));  // Output: 10
console.log("---------");


// 2. Faster Factorial
function factorial(num) {
  if (num < 0) return undefined; // Factorial not defined for negative numbers
  const memo = [1]; // Base case: Factorial(0) = 1

  for (let i = 1; i <= num; i++) {
      memo[i] = memo[i - 1] * i; // Use previously computed values
  }
  
  return memo[num];
}

// Example usage:
console.log("Faster Factorial:");
console.log(factorial(0));  // Output: 1
console.log(factorial(1));  // Output: 1
console.log(factorial(2));  // Output: 2
console.log(factorial(3));  // Output: 6
console.log(factorial(4));  // Output: 24
console.log("---------");


// 3. Fancy Fibonacci
function iFib(num) {
  if (num < 0) return undefined; // Fibonacci not defined for negative numbers
  const memo = [0, 1]; // Base cases: Fib(0) = 0, Fib(1) = 1

  for (let i = 2; i <= num; i++) {
      memo[i] = memo[i - 1] + memo[i - 2]; // Use previously computed values
  }
  
  return memo[num];
}

// Example usage:
console.log("Fancy Fibonacci:");
console.log(iFib(0));  // Output: 0
console.log(iFib(1));  // Output: 1
console.log(iFib(2));  // Output: 1
console.log(iFib(3));  // Output: 2
console.log(iFib(4));  // Output: 3
console.log(iFib(5));  // Output: 5
console.log("---------");


// 4. Tricky Tribonacci
function iTribonacci(num) {
  if (num < 0) return undefined; // Tribonacci not defined for negative numbers
  const memo = [0, 0, 1]; // Base cases: Tribonacci(0) = 0, Tribonacci(1) = 0, Tribonacci(2) = 1

  for (let i = 3; i <= num; i++) {
      memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3]; // Use previously computed values
  }
  
  return memo[num];
}

// Example usage:
console.log("Tricky Tribonacci:");
console.log(iTribonacci(0));  // Output: 0
console.log(iTribonacci(1));  // Output: 0
console.log(iTribonacci(2));  // Output: 1
console.log(iTribonacci(3));  // Output: 1
console.log(iTribonacci(4));  // Output: 2
console.log(iTribonacci(5));  // Output: 4
console.log(iTribonacci(6));  // Output: 7
console.log("---------");
