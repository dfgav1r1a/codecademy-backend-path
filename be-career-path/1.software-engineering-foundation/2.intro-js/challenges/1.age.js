// Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

// Here are the classifications:
// 0-3 should return 'baby'
// 4-12 should return 'child'
// 13-19 should return 'teen'
// 20-64 should return 'adult'
// 65-140 should return 'senior citizen'
// If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'

// Write your function here:

function lifePhase(age) {
  switch (true) {
    case (age >= 0 && age <= 3):
      return 'baby';
    case (age >= 4 && age <= 12):
      return 'child';
    case (age >= 13 && age <= 19):
      return 'teen';
    case (age >= 20 && age <= 64):
      return 'adult';
    case (age >= 60 && age <= 140):
      return 'senior citizen';
    case (age < 0 || age > 140):
      return 'This is not a valid age';
  }
}

console.log(lifePhase(67))




// Uncomment the line below when you're ready to try out your function
// console.log(lifePhase(5)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!