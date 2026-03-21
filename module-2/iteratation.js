let list = [
    'Sunday',
    'Monday',
    'Tuesday', 
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];


console.log('while loop');
let i = 0;  ////  NEVER RUN ANYTHING LIKE THIS EVER!!!!  IT WILL CRASH COMPUTER!

while ( i < list.length ) {
    console.log(list[i]);
    i = i + 1;  ///// You must always have this set or you will crash computer.
}

console.log('for loop');
// for (intitalization; condition; increment) {body_statements;}
for (let i = 0; i < list.length; i = i ++ 1)  {
console.log(list[i]);
}


console.log(list[i]);
//...
i = 6;
console.log(list[i]);