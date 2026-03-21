console.log(5, typeof 5);
console.log(5.2, typeof 5.2);
console.log('text', typeof 'text');
console.log(true,typeof true);
console.log(false,typeof false);
console.log(null, typeof null);
console.log(undefined, typeof undefined);
console.log(typeof 5);



let twoX = (x=> 2*x);
console.log(twoX(5));
let sum = (a,b) => a + b;
console.log(sum(5, 2));
let product = (a, b=42) => a * b;
console.log(product(6,2));
console.log(product(6));

let product2 = function(a,b=42) {
    return a * b;    //This is the wordy way of doing the same thing above as starting
    //on line 16 and flowing thru line 18
}
console.log(product2(6,2));
console.log(product2(6));

let owner = {
    firstName: 'Frank',
    lastName: 'Owner',
    age: 72
};

