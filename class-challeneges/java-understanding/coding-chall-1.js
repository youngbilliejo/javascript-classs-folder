// Fibonacci Sequence Definition:
// fib(0) = 0
// fib(1) = 1
// fib(n) = fib(n-1) + fib(n-2)  for n > 1

function fib(n) {
    if (n === 0) return 0;           // Base case 1
    if (n === 1) return 1;           // Base case 2
    return fib(n - 1) + fib(n - 2);  // Recursive case (Corrected)
}

// Arrow function version (fixed and properly recursive)
const fibArrow = (n) =>
    n === 0 ? 0 :                    // Base case 1
    n === 1 ? 1 :                    // Base case 2
    fibArrow(n - 1) + fibArrow(n - 2); // Recursive case (calls itself)

// Test the functions
console.log("fib(7)      =", fib(7));        // → 13
console.log("fibArrow(7) =", fibArrow(7));   // → 13
console.log("fib(15)     =", fib(15));       // → 610
console.log("fibArrow(15)=", fibArrow(15));  // → 610