// Create a function that generates an HTML table from a 3x3 array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function generateTable(matrix) {
    let markup = '<table border="1" style="border-collapse: collapse; text-align: center;">\n';
    markup += '  <tbody>\n';

    for (let row of matrix) {
        markup += '    <tr>\n';
        
        for (let cell of row) {
            markup += `      <td>${cell}</td>\n`;   // Fixed: backticks + ${}
        }
        
        markup += '    </tr>\n';
    }

    markup += '  </tbody>\n';
    markup += '</table>';

    return markup;
}

// Fixed function call
console.log(generateTable(matrix));

// another way that grok suggest is as follows:

function generateTable(matrix) {
    const rows = matrix.map(row => 
        '    <tr>\n' + 
        row.map(cell => `      <td>${cell}</td>`).join('\n') + 
        '\n    </tr>'
    ).join('\n');

    return `<table border="1" style="border-collapse: collapse; text-align: center;">\n  <tbody>\n${rows}\n  </tbody>\n</table>`;
}

console.log(generateTable(matrix));