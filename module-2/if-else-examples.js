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


//if (firstName.length === 0) {
  //  console.log('empty');
//} else if (firstName.length < 8) {
  //  console.log('short name');
//} else {
  //  console.log('8 or more characters');
//}

// or you can do it this way:
let firstName = prompt('Enter a name');   // fixed quotes + semicolon

if (firstName === null || firstName.length === 0 ) {
    console.log('empty');
} 
else if (firstName.length < 8) {          // removed the broken comment part
    console.log('short name');
} 
else {
    console.log('normal or long name');   // this now can actually run
}