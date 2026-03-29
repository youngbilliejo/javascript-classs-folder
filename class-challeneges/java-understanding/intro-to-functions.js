let f = x => x = 1;
f(5)
f(0)
f()
let g = (x,y)=> 2*x + y + 1;
g(1, 1);
g(1, 1);

// best way to use functions is as follows::

function solution(x,y){
    console.log('x', x);
    console.log('y', y);
    return -2;
}
solution(5,1);

//  this is almost as shown in demo video
function getInput() {
    let intValue;

    do {
        let value = prompt('Enter a number between 1 and 100');
        intValue = Number.parseInt(value);
    } while (
        Number.isNaN(intValue) ||
        typeof intValue !== 'number' ||
        intValue < 1 ||
        intValue > 100
    );

    return intValue;
}

function guessTheNumber() {
    const target = getInput();        // The secret number the computer will guess

    let minValue = 1;
    let maxValue = 100;
    let attempts = 0;

    console.log("I'm going to guess your number between 1 and 100...");

    while (minValue <= maxValue) {
        const midpoint = Math.floor((minValue + maxValue) / 2);
        attempts++;

        console.log(`Guess #${attempts}: ${midpoint}`);

        if (midpoint === target) {
            console.log(`🎉 I found it! Your number is ${midpoint} in ${attempts} guesses.`);
            return;
        } 
        else if (target < midpoint) {
            maxValue = midpoint - 1;
        } 
        else {
            minValue = midpoint + 1;
        }
    }
}

// Run the game
guessTheNumber();