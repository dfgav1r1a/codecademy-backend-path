const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

//1
const fileStream = fs.createWriteStream('shoppingResults.txt');

//this cb will write the line in the file 
let transformData = line => {
  fileStream.write(`They were out of: ${line}\n`);
}

myInterface.on('line', transformData);
