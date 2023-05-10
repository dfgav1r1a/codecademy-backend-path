// Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

// Return the tip, as a number, based on the following:
// ‘bad’ should return a 5% tip
// ‘ok’ should return a 15% tip
// ‘good’ should return a 20% tip
// ‘excellent’ should return a 30% tip
// all other inputs should default to 18%

// tipCalculator('good', 100) // Should return 20

// Write your function here:

function tipCalculator(quality, cost) {
   if(quality === 'bad') {
    const tip = cost * 0.05;
    return tip;
   } else if (quality === 'ok') {
    const tip = cost * 0.15;
    return tip;
   } else if (quality === 'good') {
    const tip = cost * 0.20;
    return tip;
   } else if (quality === 'excellent') {
    const tip = cost * 0.30;
    return tip;
   } else {
    const tip = cost * 0.18;
    return tip;
   }
}

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!
