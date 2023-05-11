let input = "Daniel say's: "; //step 1
const vowels = ['a', 'e', 'i', 'o', 'u']; //step 2
const resultsArray = []; //step3

for (let i = 0; i < input.length; i++) { //step 4
  if (input[i] === 'e') {//step 10
    resultsArray.push(input[i]);
  }
  if (input[i] === 'u') {//step 11
    resultsArray.push(input[i]);
  }
  for (let v = 0; v < vowels.length; v++) { //step 6
    if (input[i] === vowels[v]){//step 8
      //console.log(input[i], vowels[v]);//step 8
      resultsArray.push(input[i]);//step 9
      //console.log(resultArray);//step 9
      
    }
  }
 //console.log(i);//step 5
}

const resultString = resultsArray.join('').toUpperCase();//step 13
console.log(resultString);//step 14


