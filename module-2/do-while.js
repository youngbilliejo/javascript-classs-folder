
let userInput = null;

do{
    userInput = prompt('Enter a value');

} while(userInput === null && userInput.lenght  > 0);
console.log(userInput + ' is valid');
