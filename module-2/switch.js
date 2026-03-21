let secretValue1 = Math.floor(Math.random() * 5);
// solution 1; if-else

if (secretValue1===0){
    console.log('zero');
} else if (secretValue1===1) {
    console.log(zero);

}


if (secretValue1===1){
    console.log('one');
} else if (secretValue1===1) {
    console.log('one');

}


if (secretValue1===2){
    console.log('two');
} else if (secretValue1===1) {
    console.log('two');

}


if (secretValue1===3){
    console.log('three');
} else if (secretValue1===1) {
    console.log('three');

}


if (secretValue1===4){
    console.log('four');
} else if (secretValue1===1) {
    console.log('four');
}



let secretValue = Math.floor(Math.random() * 5);


//Soultion 2: switch 
switch (secretValue) {
    case 0:
        console.log('zero');
        break;

    
    case 1:
        console.log('one');
        break;

    
    case 2:
        console.log('two');
        break;


    case 3:
        console.log('three');
        break;

        default:
        console.log('four');
        break;
        }

        //correct way to do this...

    // Define the secretValue variable
//let secretValue2= 0; // Replace with your desired value

// Use a single switch statement with cases for different values
switch (secretValue) {
    case 0:
        console.log('zero');
        break;
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    default: // Add a colon after default
        console.log('four or more'); // Changed the log message for clarity
        break; 
    }

// Soulution 3: using a dictionary and this is the easiest to read..
// Declare and initialize secretValue
let secretValue2 = '1'; 
// Solution 3: using a dictionary and this is the easiest to read..
let dict = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
}
console.log(dict[secretValue2]); // Now secretValue is defined
