// Create a function that generates an HTML unordered list from an array and 
// returns the generated unordered list HTML markup as a string.
// let the arrays contain american list of days of the week.
// and make a console.log with a toU markup list.
       // grok answer below
// Function that converts an array into an HTML unordered list (<ul>)
function createUL(days) {
    // Start the unordered list
    let html = '<ul>\n';
    
    // Loop through each day and create a list item
    for (let day of days) {
        html += `  <li>${day}</li>\n`;
    }
    
    // Close the unordered list
    html += '</ul>';
    
    return html;
}

// Array of days of the week (American format)
const daysOfWeek = [
    "Sunday",
    "Monday", 
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// Generate the HTML list
const ulMarkup = createUL(daysOfWeek);

// Print the result to console
console.log(ulMarkup);