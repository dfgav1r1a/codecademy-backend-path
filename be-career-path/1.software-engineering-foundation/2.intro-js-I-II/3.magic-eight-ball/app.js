let username= '';
username ? 
console.log(`Hello ${username}!`) :
console.log('Hello');

let userQuestion = '';
console.log(`${username}: ${userQuestion}`);

let randomNumber = Math.floor(Math.random()*8);
let eightBall = '';

switch (randomNumber){
  case 0 : 
  eightball = 'It is certain';
  break;
  case 1 :
  eightball = 'It is decidedly so';
  break;
  case 2 :
  eightball ='Reply hazy try again';
  break;
  case 3 :
  eightball ='Cannot predict now';
  break;
  case 4 :
  eightball = 'Do not count on it';
  break;
  case 5 :
  eightBall = 'My sources say no';
  break;
  case 6 :
  eightBall = 'Outlook not so good';
  break;
  case 7 :
  eightBall = 'Signs point to yes';
  break;
  default :
  eightBall = 'enter number';
  break;
}

console.log(eightBall);