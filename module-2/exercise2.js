// Ask the user to enter a name.
// If the name us empty, print empty
//If the name is 1-8 characters long, print "short name"
//Otherwise, print "long name"
// Ask the user to enter a number and print its parity ("odd", "even", "N/A")
let intValue = Number.parseInt(prompt("Enter a number")); // Get user input

if (Number.isNaN(intValue)) { 
    console.log('N/A');
} else if (intValue % 2 === 1) { 
    console.log('odd');
} else if (intValue % 2 === 0) {
    console.log('even');
} else {
    // This else block will never be reached due to the conditions above
    console.log('other value');
}
// this is a second way od doing this?
if (intValue >= 2) {
    console.log('At least 2');
}