// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */

function convertToCelsius(fahren) {
    let celcius = (fahren-32 * 5/9)
    return celcius
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
    return `the current temp in fahrenheit: ${fahren} and the temp in celcius is ${celc}. That means it is ${temperature} outside`
 }
 let  ahren = fahrenheit <= 32
    if (fahren <32) {
        temperature = "very cold"
    } else if (fahren >=32 && fahren <64){
        temperature = "cold"
    } else if (fahren >=64 && fahren <86){
        temperature = "warm"
    }else if (fahren >100){
        temperature = "hot"
    }
 return `the current temp in fahrenheit: ${fahren} and the temp in celcius is ${celc}. That means it is ${temperature} outside`
// /**
//  * Takes a number and returns a random integer from 0 to the limit
//  * @param {number} limit
//  * @returns {number} a number between 0 and the int passed in
//  */
function rand(limit) {
    const randomNum = Math.floor(Math.random()*(limit - 0) + 0)
    return randomNum
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