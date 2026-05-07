import { calculator } from "../scripts/calculator";

test("add numbers", () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(4.5, 3)).toBeCloseTo(7.5);
  expect(calculator.add(-5, 2)).toBe(-3);
});

test("subtract numbers", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.subtract(4.5, 3)).toBeCloseTo(1.5);
  expect(calculator.subtract(3, 5)).toBe(-2);
  expect(calculator.subtract(-2, -2)).toBe(0);
  expect(calculator.subtract(-2, 1)).toBe(-3);
});

test("multiply numbers", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.multiply(1.5, 3)).toBeCloseTo(4.5);
  expect(calculator.multiply(-2, 3)).toBe(-6);
  expect(calculator.multiply(0, 100)).toBe(0);
});

test("divide numbers", () => {
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.divide(4.5, 1.5)).toBe(3);
    expect(calculator.divide(-8, 2)).toBe(-4);
    expect(calculator.divide(6, 0)).toBe("Cannot divide by zero");
})
