import { analyzeArray } from "../scripts/analyze-array";

test("average is successfully returned for an array of positive whole numbers", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
  expect(analyzeArray([1, 8, 3, 2, 4, 2]).average).toBeCloseTo(3.33);
});

test("average is successfully returned for an array with positive decimal numbers", () => {
  expect(analyzeArray([1.2, 8.5, 4.3, 7.6]).average).toBeCloseTo(5.4);
  expect(analyzeArray([1.5, 3, 9.5, 12.8, 1]).average).toBeCloseTo(5.56);
});

test("average is successfully returned for an array with negative numbers", () => {
  expect(analyzeArray([-1, -8, -3, -4, -2, -6]).average).toBe(-4);
  expect(analyzeArray([1, -2, 5, -8, 6]).average).toBeCloseTo(0.4);
});

test("average for an array with a single number is the value of the number", () => {
  expect(analyzeArray([5]).average).toBe(5);
  expect(analyzeArray([-20]).average).toBe(-20);
});

test("average for an array with a single value of 0 is 0", () => {
  expect(analyzeArray([0]).average).toBe(0);
});

test("min is successfully returned for an array of positive numbers", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
  expect(analyzeArray([8, 3, 4, 2, 6]).min).toBe(2);
});

test("min is successfully returned for an array with negative numbers", () => {
  expect(analyzeArray([-1, -8, -3, -4, -2, -6]).min).toBe(-8);
  expect(analyzeArray([-1, -2, 5, 8, 6]).min).toBe(-2);
});

test("min is successfully returned when it is at the start of the array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).min).toBe(1);
});

test("min is successfully returned when it is at the end of the array", () => {
  expect(analyzeArray([5, 4, 3, 2, 1]).min).toBe(1);
});

test("min is successfully returned when its value repeats in the array", () => {
  expect(analyzeArray([1, 4, 1, 2, 1]).min).toBe(1);
});

test("min for an array with a single number is the value of that number", () => {
  expect(analyzeArray([5]).min).toBe(5);
  expect(analyzeArray([-20]).min).toBe(-20);
});

test("max is successfully returned for an array of positive numbers", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
  expect(analyzeArray([3, 4, 2, 6]).max).toBe(6);
});

test("max is successfully returned for an array with negative numbers", () => {
  expect(analyzeArray([-1, -8, -3, -4, -2, -6]).max).toBe(-1);
  expect(analyzeArray([-1, -2, 5, 8, 6]).max).toBe(8);
});

test("max is successfully returned when it is at the start of the array", () => {
  expect(analyzeArray([5, 4, 3, 2, 1]).max).toBe(5);
});

test("max is successfully returned when it is at the end of the array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).max).toBe(5);
});

test("max is successfully returned when its value repeats in the array", () => {
  expect(analyzeArray([6, 4, 6, 2, 6]).max).toBe(6);
});

test("max for an array with a single number is the value of that number", () => {
  expect(analyzeArray([5]).max).toBe(5);
  expect(analyzeArray([-20]).max).toBe(-20);
});

test("length for an array is returned successfully", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
  expect(analyzeArray([5]).length).toBe(1);
});
