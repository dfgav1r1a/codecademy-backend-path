const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor (fieldArray = [[]]) {
        this.field = fieldArray;
        this.locationX = 0;
        this.locationY = 0;
        this.field[0][0] = pathCharacter;
    }
    
    print() {
        const rowToString = this.field.map(row => {
            return row.join('');
        }).join('\n');
        console.log(rowToString);
    }

    static generateField(height, width, percentage = 0.1) {
       //creating 2 dimensional field
       const field = new Array(height).fill(0).map(ele => {
        return new Array(width);
       });
       //creating loop to randomize placement of character on board
       //looping through y axis which is height
       for (let y = 0; y < height; y++) {
           //inner loop through x
           for (let x = 0; x < width; x++) {
            const prob = Math.random();
            field[y][x] = prob > percentage ? fieldCharacter : hole;
           } 
       }
       //setting the location of the hat
       const hatLocation = {
        x : Math.floor(Math.random() * width),
        y : Math.floor(Math.random() * height)
       };
       //making that the hat is not in the starting point
       while (hatLocation.x === 0 && hatLocation.y === 0) {
        hatLocation.x = Math.floor(Math.random() * width);
        hatLocation.y = Math.floor(Math.random() * height);
       }
       //placing the hat into the randomized position within the randomized generated field
       field[hatLocation.y][hatLocation.x] = hat;
       return field;
    }
    userQuestion() {
        const userInput = prompt('Which direction? ');
        //switch statement to move the player's character
        switch (userInput) {
            case 'w':
                this.locationY -= 1;
                break;
            case 's':
                this.locationY += 1;
                break;
            case 'a':
                this.locationX -= 1;
                break;
            case 'd':
                this.locationX += 1;
                break;
            default:
                console.log('Type w for up, s for down, a for left or d for right to move your character');
                this.userQuestion();
                break;
        }
    }
    isInBounds() {
        return (
            this.locationY >= 0 &&
            this.locationX >= 0 &&
            this.locationY < this.field.length &&
            this.locationX < this.field[0].length
        );
    }
    isHat() {
        return this.field[this.locationY][this.locationX] === hat;
    }
    isHole() {
        return this.field[this.locationY][this.locationX] === hole;
    }
    runGame() {
        let playing = true;
        while (playing) {
            this.print();
            this.userQuestion();
            if (!this.isInBounds()) {
                console.log('Out of bounds instruction!');
                playing = false;
                break;
            } else if (this.isHole()) {
                console.log('Sorry, you fell down a hole!');
                playing = false;
                break;
            } else if (this.isHat()) {
                console.log('Congrats, you found the hat!');
                playing = false;
                break;
            } 
            //update location on the map
            this.field[this.locationY][this.locationX] = pathCharacter;
        }
    }
}

const myField = new Field(Field.generateField(20, 20, 0.2));
myField.runGame();