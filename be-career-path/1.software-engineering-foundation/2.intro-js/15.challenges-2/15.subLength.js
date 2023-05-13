// Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

// Examples:

// subLength('Saturday', 'a'); // returns 6
// subLength('summer', 'm'); // returns 2
// subLength('digitize', 'i'); // returns 0
// subLength('cheesecake', 'k'); // returns 0

// Write function below
const subLength = (str, char) => {
    const indexOfOccurrence = [];
    let occurrences = 0;
    let lengthBetween = 0;
    console.log("length", str.length);

    //iterating over string
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            indexOfOccurrence.push(i);
            occurrences++;
        }
    }
    
    // console.log('indexes of occurrences', indexOfOccurrence);
    //loop to calculate lengthBetween
    for (let c = indexOfOccurrence[0]; c <= indexOfOccurrence[1]; c++) {
        lengthBetween ++;
    }

    // console.log('lengthBetween', lengthBetween);
    //checking for occurrences limit
    if (occurrences > 2 || occurrences < 2) {
        console.log(`Too many or too little occurrences of ${char} in ${str}`);
        return 0;
    }

    console.log(`In ${str} the length between ${char} is ${lengthBetween}`)

    return lengthBetween;
}

// console.log('1 console', subLength('digitize', 'i')); // returns 0
// console.log('2 console', subLength('cheesecake', 'k')); // returns 0
console.log('3 console', subLength('Saturday', 'a')); // returns 6
// console.log('4 console', subLength('summer', 'm')); // returns 2