// Write a function factorial() that takes a number as an argument and returns the factorial of the number.

// Example:

// factorial(6); 
// // returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 
// Assume only positive numbers will be given as an argument for the factorial() function.

// Write function below
const factorial = n => {
  let factorialBase = n;
  while (n > 1) {
    n --;
    factorialBase *= n
    // console.log(factorialBase);
  }
  return factorialBase
}

console.log(factorial(6))