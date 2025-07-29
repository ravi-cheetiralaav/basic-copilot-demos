/**
 * @description: A calculator module that can add, subtract, multiply, modulo, 
 *              exponent and divide by taking in two numbers and an operator.
 *              It throws an error if the operator is invalid or if the second
 *              number is zero and the operator is division.  
 *  
 * @param {number} num1
 * @param {number} num2
 * @param {string} operator
 * 
 * @returns {number} result of the operation
 */

const calculator = (num1, num2, operator) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Both inputs must be numbers');
    }
    if (typeof operator !== 'string') {
    throw new Error('Operator must be a string');
    }
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error('Division by zero is not allowed');
            }
            return num1 / num2;
        case '%':
            return num1 % num2;
        case '**':
            return num1 ** num2;
        default:
            throw new Error('Invalid operator');
    }
};

module.exports = calculator;

