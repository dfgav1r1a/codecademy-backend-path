// Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

// If the year is in the future, you should return a string in the following format:

// 'You will be [calculated age] in the year [year passed in]'
// If the year is before they were born, you should return a string in the following format:

// 'The year [year passed in] was [calculated number of years] years before you were born'
// If the year is in the past but not before the person was born, you should return a string in the following format:

// 'You were [calculated age] in the year [year passed in]'

// Write your function here:
function howOld(age, year) {
  const currentYear = 2023;
  const yearBorn = currentYear - age; 
  if (year > currentYear) {
    const futureAge = (year - currentYear) + age
    return `You will be ${futureAge} in the year ${year} `
  } else if (year < yearBorn) {
    const yearsAgo = yearBorn - year;
    return `The year ${year} was ${yearsAgo} years before you were born`
  } else if (year < currentYear && year > yearBorn) {
    const oldAge = year - yearBorn; 
    return `You were ${oldAge} in the year ${year}`
  } else {
    return 'Check your entries';
  }
}

console.log(howOld(12, 2020))
// Once your function is written, write function calls to test your code!
