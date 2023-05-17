//constant for kelvin
const kelvin = 293;

//conversion from k to c
const celsius = kelvin - 273;

//conversion from C to F
let fahrenheit = celsius * (9/5) + 32;

//round down of conversion from c to f
fahrenheit = Math.floor(fahrenheit);

//printing my calculations
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//conversion from c to n
let newton = celsius *(33/100);

//rundown newton
newton = Math.floor(newton);

//printing last conversion
console.log(`The temperature is ${newton} degrees Newton.`);



