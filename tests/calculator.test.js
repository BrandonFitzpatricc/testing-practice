import { calculator } from "../scripts/calculator";

test("positive whole numbers are added successfully", () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(3, 5)).toBe(8);
});

test("negative whole numbers are added successfully", () => {
  expect(calculator.add(-5, 2)).toBe(-3);
  expect(calculator.add(-5, -3)).toBe(-8);
});

test("decimal numbers are added successfully", () => {
  expect(calculator.add(4.5, 3)).toBeCloseTo(7.5);
  expect(calculator.add(4.5, 1.5)).toBe(6);
});

test("positive whole numbers are subtracted successfully", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.subtract(3, 5)).toBe(-2);
});

test("negative whole numbers are subtracted successfully", () => {
  expect(calculator.subtract(-2, -2)).toBe(0);
  expect(calculator.subtract(-2, 1)).toBe(-3);
});

test("decimal numbers are subtracted successfully", () => {
  expect(calculator.subtract(4.5, 3)).toBeCloseTo(1.5);
  expect(calculator.subtract(4.5, 1.5)).toBe(3);
});

test("positive whole numbers are multiplied successfully", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.multiply(3, 5)).toBe(15);
});

test("negative whole numbers are multiplied successfully", () => {
  expect(calculator.multiply(-2, 3)).toBe(-6);
  expect(calculator.multiply(-2, -4)).toBe(8);
});

test("decimal numbers are multiplied successfully", () => {
  expect(calculator.multiply(1.5, 3)).toBeCloseTo(4.5);
  expect(calculator.multiply(4.5, 1.5)).toBe(6.75);
});

test("multiplying any number by zero equals zero", () => {
  expect(calculator.multiply(0, 100)).toBe(0);
  expect(calculator.multiply(0, -543)).toBe(-0);
});

test("positive whole numbers are divided successfully", () => {
  expect(calculator.divide(4, 2)).toBe(2);
  expect(calculator.divide(8, 2)).toBe(4);
});

test("negative whole numbers are divided successfully", () => {
  expect(calculator.divide(-8, 2)).toBe(-4);
  expect(calculator.divide(-10, -5)).toBe(2);
});

test("decimal numbers are divided successfully", () => {
  expect(calculator.divide(4.5, 1.5)).toBe(3);
  expect(calculator.divide(2.5, 1.25)).toBe(2);
});

test("no number can be divided by zero", () => {
  expect(calculator.divide(6, 0)).toBe("Cannot divide by zero");
  expect(calculator.divide(-32, 0)).toBe("Cannot divide by zero");
});
