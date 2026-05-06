import { reverseString } from "../scripts/reverse-string";

test("reverse string", () => {
  const tests = [
    {
      value: "Hello",
      expected: "olleH",
    },
    {
      value: "World",
      expected: "dlroW",
    },
    {
      value: "123",
      expected: "321",
    },
    {
      value: "Hello World",
      expected: "dlroW olleH",
    },
  ];

  tests.forEach((test) => {
    const actual = reverseString(test.value);
    expect(actual).toBe(test.expected);
  });
});
