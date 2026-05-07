const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => {
    return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
  },
};

export { calculator };
