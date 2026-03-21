//1. Enumerate all datatpes you have learned.  Create a variable for each
// datatype.  Console log the reults.  For bonus points, research template
// literals using devdocs.io, and print all of your variables with just one
// console log in a multiline string.

let sum = (a, b) => a + b;
let dict = {
    'apple' : 'apfel',
    'egg' : 'ei',
}
    let list = ['Monday', 'Tuesday', 'Wednesday', 'Thuursday', 'Friday',
        'Saturday', 'Sunday'];

let mySet = new Set(list);
let myMap = new Map ([['apple', 'apfel'], ['egg', 'ei'],]);
let num = 5;
let string = 'abc';
let bool = false;
let undef = dict['non-existing-key'];  // usually we dont write this all in code
let nullvalue = null
let bigNum = 5n;
let mySymbol = Symbol('test');


 console.log(`
    Reference datatypes$ 
    ${sum}: ${typeof sum}
    ${dict}: ${typeof dict} (is Array? $(Array.isArray(dict=))
    ${list}: ${typeof list}
    ${mySet}: ${typeof myMap}
    ${myMap}: ${myMap}


    Value datatypes:
    ${num}: ${typeof num}
    ${string}: ${typeof string};
    ${bool}: ${typeof bool}
    $ {nullValue}: ${typeof nullvalue}
    ${undef}: ${typeof undefined}
    ${bigNum}: ${typeof bigNum}
    mySymbol: ${typeof mySymbol}

    `);