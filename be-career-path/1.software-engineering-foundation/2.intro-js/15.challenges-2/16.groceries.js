// Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

// Examples:

// groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// // returns 'Carrots, Hummus, Pesto and Rigatoni'

// groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// // returns 'Bread and Butter'

// groceries( [{item: 'Cheese Balls'}] );
// // returns 'Cheese Balls'

const groceries = list => {
    let finalString = '';

    if (list.length === 1) {
        return `${list[0].item}`
    } else {
        let counter = 0;
        while (counter < list.length) {
            if (counter === list.length - 2) {
                finalString += `${list[counter].item} and `
                counter++
                finalString += `${list[counter].item}`;
                break;
            }
            finalString += `${list[counter].item}, `
            counter++
        }
    }
    return finalString;
}

console.log(groceries([{ item: 'Cheese Balls' }]));
console.log(groceries([{ item: 'Bread' }, { item: 'Butter' }]));
console.log(groceries([{ item: 'Carrots' }, { item: 'Hummus' }, { item: 'Pesto' }, { item: 'Rigatoni' }])); 
