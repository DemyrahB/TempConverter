


function convertToCelsius(fahrenheit){
    return (fahrenheit-32)*5/9;
}
function createMessage(fahrenheit,celsius){
    let message = "Thank you for participating";
    const numF= fahrenheit * 1;
}

if (numF === 212){
    message = "That's the boiling point of water";
   }   else if (numF === 32){
        message = "That's the freezing point of water";
    }
    else if (numF === -109){
        message = "That's the temperature of dry ice"
    }
    else if (numF === 406){
        message = "That's the temperature of Saturated Liquid";
    }
return `${fahrenheit} F is ${celsius} C. ${message}`;


function rand(limit){
    return Math.round(Math.random()*limit);
}

let inputFahrenheit = prompt('enter a number and I will convert that number from fahrenheit to celsius');
let convertedCelsius = convertToCelsius(inputFahrenheit);
let output = createMessage(inputFahrenheit, convertedCelsius);
console.log(output);








