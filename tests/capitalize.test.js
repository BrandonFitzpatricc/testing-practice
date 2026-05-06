import { capitalize } from "../scripts/capitalize";

test("capitalize string", () => {
  const tests = [
    {
      value: "hello",
      expected: "Hello",
    },
    {
      value: "world",
      expected: "World",
    },
    {
      value: "program",
      expected: "Program",
    },
    {
      value: "hello world",
      expected: "Hello world",
    },
    {
      value: "Hello",
      expected: "Hello",
    },
  ];

  tests.forEach((test) => {
    const actual = capitalize(test.value);
    expect(actual).toBe(test.expected);
  });
});
