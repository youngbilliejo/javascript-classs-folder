// Destructuring (this part was mostly correct)
let arr = [{a: 1}, {a: 2}, {a: 5}];
let [first, {a: secondValue}] = arr;

console.log(first);        // { a: 1 }
console.log(secondValue);  // 2

// Spread Operator Examples

let arr1 = [1, 2, 5];

let mixin1 = {
    id: '123456AB'
};

let mixin2 = {
    age: 25,
    "biological age": 24     // Fixed: quoted because of space
};

let person = {
    first: 'Jack',
    last: 'Young',
};

// ✅ Correct way to use spread operator
let fullPerson = {
    ...person,           // spread person object
    ...mixin1,           // spread mixin1
    ...mixin2,           // spread mixin2 (last one wins if keys conflict)
    country: "USA"       // you can still add new properties
};

let numbers = [...arr1, 10, 20, 30];   // spread array

console.log(fullPerson);
console.log(numbers);

function plusOne( value){
    value +=1;
    console.log(value);
}
let val = 1;
plusOne(val);
console.log(val);


