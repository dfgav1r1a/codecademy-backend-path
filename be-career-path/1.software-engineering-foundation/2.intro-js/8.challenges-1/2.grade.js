// Write a function, finalGrade(). It should:

// take three arguments of type number
// find the average of those three numbers
// return the letter grade (as a string) that the average corresponds to
// return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
// 0-59 should return: 'F'
// 60-69 should return: 'D'
// 70-79 should return: 'C'
// 80-89 should return: 'B'
// 90-100 should return: 'A'

// Write your function here:
function finalGrade(arg1, arg2, arg3) {
  if (typeof arg1 !== 'number' && typeof arg2 !== 'number' && typeof arg3 !== 'number') {
    return 'Please enter a number'
  };

  if ((arg1 < 0 || arg1 > 100) || (arg2 < 0 || arg2 > 100) || (arg3 < 0 || arg3 > 100)) {
    return 'You have entered an invalid grade.'
  }

  const avg = (arg1 + arg2 + arg3) / 3;

  switch (true) {
    case (avg >= 0 && avg <= 59):
      return 'F';
    case (avg >= 60 && avg <= 69):
      return 'D';
    case (avg >= 70 && avg <= 79):
      return 'C';
    case (avg >= 80 && avg <= 89):
      return 'B';
    case (avg >= 90 && avg <= 100):
      return 'A';
  }
}





// Uncomment the line below when you're ready to try out your function
// console.log(finalGrade(99, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!