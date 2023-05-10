//1
const getUserChoice = userInput => {
  //2
  userInput = userInput.toLowerCase();
  //3
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {
    return userInput
  } else {
    console.log(' Wrong input: Choose either rock, paper or scissors')
  }
}

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return 'rock';
  } else if (randomNum === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It is a tie';
  }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'User won!'
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!';
    } else {
      return 'User won!'
    }
  }

if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else {
      return 'User won!'
    }
  }

  if (userChoice === 'bomb') {
      return 'Computer is DUST!'
  }
}

(function playGame() {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  if (userChoice === 'bomb') {
    console.log
  }
  console.log(userChoice, computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
})();
