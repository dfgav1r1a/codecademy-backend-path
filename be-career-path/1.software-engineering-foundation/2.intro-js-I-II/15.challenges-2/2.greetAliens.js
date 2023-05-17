// Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

// The greeting should take the following format:
// “Oh powerful [stringElement], we humans offer our unconditional surrender!”

// const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
 
// greetAliens(aliens);
// // Should print:
// // Oh powerful Blorgous, we humans offer our unconditional surrender! 
// // Oh powerful Glamyx, we humans offer our unconditional surrender! 
// // Oh powerful Wegord, we humans offer our unconditional surrender! 
// // Oh powerful SpaceKing, we humans offer our unconditional surrender! 
// Note: You may have noticed how convenient it would be to use .forEach(), but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!
// // Write your code here:

function greetAliens(array) {
   for (let i = 0; i < array.length; i ++) {
    console.log(`Oh powerful ${array[i]}, we humans offer our unconditioanl surrender!`);
   }
}

// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

