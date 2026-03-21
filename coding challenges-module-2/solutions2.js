// 2. Ask the user to enter an integer between 1 to 100. Validate input
//    and repeat asking until valid.

let intValue;

do {
    let input = prompt('Enter a number between 1 and 100');
    intValue = Number.parseInt(input);   // or parseInt(input, 10)
} while (
    Number.isNaN(intValue) ||
    intValue < 1 ||
    intValue > 100
);

console.log('The input is valid:', intValue);