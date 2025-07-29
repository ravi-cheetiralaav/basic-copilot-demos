const calculator = require('./calculator');

describe('Calculator', () => {
  describe('Addition (+)', () => {
    test('should add two positive numbers', () => {
      expect(calculator(5, 3, '+')).toBe(8);
    });

    test('should add two negative numbers', () => {
      expect(calculator(-5, -3, '+')).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(calculator(5, -3, '+')).toBe(2);
    });

    test('should add decimal numbers', () => {
      expect(calculator(2.5, 1.5, '+')).toBe(4);
    });

    test('should add zero to a number', () => {
      expect(calculator(5, 0, '+')).toBe(5);
    });
  });

  describe('Subtraction (-)', () => {
    test('should subtract two positive numbers', () => {
      expect(calculator(5, 3, '-')).toBe(2);
    });

    test('should subtract negative numbers', () => {
      expect(calculator(-5, -3, '-')).toBe(-2);
    });

    test('should subtract resulting in negative', () => {
      expect(calculator(3, 5, '-')).toBe(-2);
    });

    test('should subtract decimal numbers', () => {
      expect(calculator(5.5, 2.5, '-')).toBe(3);
    });
  });

  describe('Multiplication (*)', () => {
    test('should multiply two positive numbers', () => {
      expect(calculator(5, 3, '*')).toBe(15);
    });

    test('should multiply by zero', () => {
      expect(calculator(5, 0, '*')).toBe(0);
    });

    test('should multiply negative numbers', () => {
      expect(calculator(-5, -3, '*')).toBe(15);
    });

    test('should multiply positive and negative', () => {
      expect(calculator(5, -3, '*')).toBe(-15);
    });

    test('should multiply decimal numbers', () => {
      expect(calculator(2.5, 4, '*')).toBe(10);
    });
  });

  describe('Division (/)', () => {
    test('should divide two positive numbers', () => {
      expect(calculator(15, 3, '/')).toBe(5);
    });

    test('should divide negative numbers', () => {
      expect(calculator(-15, -3, '/')).toBe(5);
    });

    test('should divide positive and negative', () => {
      expect(calculator(15, -3, '/')).toBe(-5);
    });

    test('should divide decimal numbers', () => {
      expect(calculator(7.5, 2.5, '/')).toBe(3);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculator(5, 0, '/')).toThrow('Division by zero is not allowed');
    });
  });

  describe('Modulo (%)', () => {
    test('should return remainder of division', () => {
      expect(calculator(10, 3, '%')).toBe(1);
    });

    test('should return zero when divisible', () => {
      expect(calculator(10, 5, '%')).toBe(0);
    });

    test('should handle negative numbers', () => {
      expect(calculator(-10, 3, '%')).toBe(-1);
    });
  });

  describe('Exponentiation (**)', () => {
    test('should calculate power of positive numbers', () => {
      expect(calculator(2, 3, '**')).toBe(8);
    });

    test('should calculate power with zero exponent', () => {
      expect(calculator(5, 0, '**')).toBe(1);
    });

    test('should calculate power with negative exponent', () => {
      expect(calculator(2, -2, '**')).toBe(0.25);
    });

    test('should calculate square root using fractional exponent', () => {
      expect(calculator(9, 0.5, '**')).toBe(3);
    });
  });

  describe('Error Handling', () => {
    test('should throw error for non-number first parameter', () => {
      expect(() => calculator('5', 3, '+')).toThrow('Both inputs must be numbers');
    });

    test('should throw error for non-number second parameter', () => {
      expect(() => calculator(5, '3', '+')).toThrow('Both inputs must be numbers');
    });

    test('should throw error for non-string operator', () => {
      expect(() => calculator(5, 3, 123)).toThrow('Operator must be a string');
    });

    test('should throw error for invalid operator', () => {
      expect(() => calculator(5, 3, '^')).toThrow('Invalid operator');
    });

    test('should throw error for null inputs', () => {
      expect(() => calculator(null, 3, '+')).toThrow('Both inputs must be numbers');
    });

    test('should throw error for undefined inputs', () => {
      expect(() => calculator(undefined, 3, '+')).toThrow('Both inputs must be numbers');
    });
  });

  describe('Edge Cases', () => {
    test('should handle very large numbers', () => {
      expect(calculator(1e10, 1e10, '+')).toBe(2e10);
    });

    test('should handle very small decimal numbers', () => {
      expect(calculator(0.1, 0.2, '+')).toBeCloseTo(0.3);
    });

    test('should handle negative zero', () => {
      expect(calculator(-0, 5, '+')).toBe(5);
    });

    test('should handle Infinity', () => {
      expect(calculator(Infinity, 5, '+')).toBe(Infinity);
    });
  });
});