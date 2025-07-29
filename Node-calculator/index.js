const calculator = require('./calculator');

// Read command line arguments
const [,, num1, operator, num2] = process.argv;

if (!num1 || !operator || !num2) {
    console.log('Usage: node index.js <num1> <operator> <num2>');
    console.log('Example: node index.js 5 + 3');
    console.log('Supported operators: +, -, *, /, %, **');
    process.exit(1);
}

// Convert string inputs to numbers
const a = parseFloat(num1);
const b = parseFloat(num2);

// Validate that the inputs are valid numbers
if (isNaN(a) || isNaN(b)) {
    console.log('Error: Both inputs must be valid numbers');
    process.exit(1);
}

try {
    // Use the calculator function with the operator
    const result = calculator(a, b, operator);
    console.log(`${a} ${operator} ${b} = ${result}`);
} catch (error) {
    console.log('Error:', error.message);
    process.exit(1);
}