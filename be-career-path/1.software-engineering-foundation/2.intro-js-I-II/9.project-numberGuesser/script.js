let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
   const randomNum = Math.floor(Math.random() * 10); 
   return randomNum;
}

//getting the difference
function getAbsoluteDistance(guessedNum, secretNum) {
    let difference = null;

    if (guessedNum < 0 || guessedNum > 9) {
        window.alert('Your number is out of range, please enter a number between 0 and 9');
    }

    if (guessedNum > secretNum) {
        difference = Math.abs(guessedNum - secretNum);
    } else if (guessedNum < secretNum) {
        difference = Math.abs(secretNum - guessedNum);
    } else {
        difference = 0;
    }

    return difference;
}

function compareGuesses(userGuess, computerGuess, targetNum) {
    let userDifference = getAbsoluteDistance(userGuess, targetNum);
    let computerDifference = getAbsoluteDistance(computerGuess, targetNum);

    //who wins?
    if (userDifference === computerDifference) {
        console.log('It\'s a tie, Human wins');
        return true;
    } else if (userDifference > computerDifference) {
        console.log('Computer wins');
        return false;
    } else {
        console.log('The human wins!');
        return true;
    }
}

function updateScore(str) {
    if (str === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}