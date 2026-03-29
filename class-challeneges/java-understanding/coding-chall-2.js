// Create a function that accepts an array and increments each value in the
// array by 1.  You can assume input only contains numbers.  Then print the 
//return value of the array and the original array to the console.  Make sure
// the original array stays intact.

// Grok did this:

// Function that increments each value in the array by 1
// without modifying the original array
function incrementArray(arr) {
    // Create a new array with each value + 1
    const newArray = arr.map(num => num + 1);
    
    return newArray;
}

// Test the function
const originalArray = [1, 2, 3, 4, 5];

const result = incrementArray(originalArray);

console.log("Original array:", originalArray);   // [1, 2, 3, 4, 5]
console.log("Incremented array:", result);       // [2, 3, 4, 5, 6]

//and this is the same but another way from grok.

function incrementArray(arr) {
    const newArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i] + 1);
    }
    
    return newArray;
}
