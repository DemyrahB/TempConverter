// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */

function convertToCelsius(fahren) {
  let Temp = fahren;
  let convertToFahrenheit = Temp - 32 * 5/9;
}
const fahrenheit = ''

let vcoldTemp = fahrenheit <= 32
    if (vcoldTemp) {
        console.log("very cold")
    }

let coldTemp = fahrenheit <= 64
    if (coldTemp){
        console.log("cold");
    }

let warmTemp = fahrenheit <= 86
    if (warmTemp){
        console.log("warm");
    }

let hotTemp = fahrenheit <= 100
    if (hotTemp){
        console.log("hot!");
    }


/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
//  * @param {212} fahren
//  * @param {100} celc
//  */
function createMessage(fahren, celc) {
    alert (fahren, celc) 
 }

// /**
//  * Takes a number and returns a random integer from 0 to the limit
//  * @param {number} limit
//  * @returns {number} a number between 0 and the int passed in
//  */
function rand(max) {
    return (Math.floor(convertToFahrenheit) * max)
}

// // -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output)
fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output)
fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output)
fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output)