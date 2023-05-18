// A video game consists of two players floating using 100 helium balloons. The players shoot pellets at each other’s balloons and after 10 minutes the player with the most balloons left wins.

/*
class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }
 
  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
  }
}
*/

// Write a game function balloonAttack that takes two Player instances, calculates the balloons left for each player after 10 minutes (using the hitsPerMinute property) and returns the name of the winner. If the result is a tie, return the string 'Tie'.

// You can test your balloonAttack function by creating two instances of the Player class to use as arguments for your function like below:

// const p1 = new Player('p1', 5);
// const p2 = new Player('p2', 2);
 
// balloonAttack(p1, p2);

// Feel free to use the status() method to output each player’s balloon count at any given time.

class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
  }
}

// Write function below

function balloonAttack(p1, p2) {
  const tie = 'tie';
  const p1Wins = `${p1.name} wins!`;
  const p2Wins = `${p2.name} wins!`;
  const gameDuration = 10;
  const ballonsHitByP1 = p1.hitsPerMinute * gameDuration;
  const ballonsHitByP2 = p2.hitsPerMinute * gameDuration;
  const p1BalloonCount = p1.balloonCount - ballonsHitByP2;
  const p2BalloonCount = p2.balloonCount - ballonsHitByP1;

  return p1BalloonCount === p2BalloonCount ?
    tie :
    p1BalloonCount > p2BalloonCount ?
      p1Wins :
      p2Wins;

}


const p1 = new Player('p1', 11);
const p2 = new Player('p2', 12);

console.log(balloonAttack(p1, p2));