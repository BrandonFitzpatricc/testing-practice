import { capitalize } from "../scripts/capitalize";

test("lowercase words are capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("world")).toBe("World");
  expect(capitalize("program")).toBe("Program");
});

test("the first word of a multi-word string is capitalized", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("words that are already capitalized remain the same", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("strings that contain a non-letter as the first character cannot be capitalized", () => {
  expect(capitalize("123")).toBe("1 cannot be capitalized");
  expect(capitalize("$hello")).toBe("$ cannot be capitalized");
});

test("strings that start with a letter but contain non-letters are capitalized", () => {
  expect(capitalize("hello123")).toBe("Hello123");
});


