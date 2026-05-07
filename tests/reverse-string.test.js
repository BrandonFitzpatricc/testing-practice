import { reverseString } from "../scripts/reverse-string";

test("Words are reversed", () => {
  expect(reverseString("Hello")).toBe("olleH");
  expect(reverseString("World")).toBe("dlroW");
});

test("Non-letter strings are reversed", () => {
  expect(reverseString("123")).toBe("321");
});

test("Multi-word strings are reversed", () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
});
