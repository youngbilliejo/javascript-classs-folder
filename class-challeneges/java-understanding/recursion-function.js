

function countToTwenty(val) {
    if (val >= 10) return;  ///exit condition
    console.log(val);
    countToTen(val + 1);
}
countToTwenty(1);


/*
o! = 1
n! = n * (n-1)!
*/
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    // unreachable code for n = 0.
    return n * factorial(n - 1);
}
let factArrow = n => n === 0 ? 1 : n * factorial(n - 1);
console.log('factorial(5)', factorial(5));
//console.log('factArrow'(5), factArrow(5));
console.log('5*4*3*2*1 = ', 5 * 4 * 3 * 2 * 1);
