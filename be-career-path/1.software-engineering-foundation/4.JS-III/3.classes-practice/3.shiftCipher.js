// A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.

// Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:

// encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
// decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
// In both methods, any character outside the alphabet should remain the same.
// But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.
// Example:

// const cipher = new ShiftCipher(2);
// cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
// cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'
// Feel free to reference the Unicode Table as well as the JavaScript String methods including: toUpperCase(), toLowerCase(), charCodeAt() and fromCharCode().

class ShiftCipher {
    constructor(shiftNumber) {
        this.shiftNumber = shiftNumber;
    }

    encrypt(string) {
        const stringUpperCase = string.toUpperCase();
        let encoded = '';
        //lopping the string
        for (let i = 0; i < stringUpperCase.length; i++) {
            let utfDecimal = stringUpperCase.charCodeAt(i);
            //handling special characters
            if (utfDecimal < 65 || utfDecimal > 90) {
                encoded += String.fromCharCode(utfDecimal)
            } else {
                utfDecimal += this.shiftNumber;
                if (utfDecimal > 90) {
                    utfDecimal -= 26;
                }
                encoded += String.fromCharCode(utfDecimal)
            }
        }
        return encoded;
    }

    decrypt(encrypted) {
        const stringLowerCase = encrypted.toLowerCase();
        let decrypted = '';
        //looping the string
        for (let i = 0; i < stringLowerCase.length; i++) {
            let utfDecimal = stringLowerCase.charCodeAt(i);
            //handling case with special characters
            if (utfDecimal < 97 || utfDecimal > 122) {
                decrypted += String.fromCharCode(utfDecimal);
            } else {
                utfDecimal -= this.shiftNumber;
                //handling wrap
                if (utfDecimal < 97) {
                    utfDecimal += 26;
                }
                decrypted += String.fromCharCode(utfDecimal);
            }
        }
        return decrypted;
    }
}

const cipher = new ShiftCipher(1);
const encrypted = cipher.encrypt('Z')
// console.log(encrypted, cipher.decrypt(encrypted))
console.log(encrypted);
console.log(cipher.decrypt('a'));