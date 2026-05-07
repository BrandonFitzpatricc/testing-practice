import { caesarCipher } from "../scripts/caesar-cipher";

test("abc is encrypted to def when a shift factor of 3 is applied", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("xyz is encrypted to abc when a shift factor of 3 is applied", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("hello is encrypted to mjqqt when a shift factor of 5 is applied", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("lettercasing is preserved", () => {
  expect(caesarCipher("AbC", 3)).toBe("DeF");
  expect(caesarCipher("XyZ", 3)).toBe("AbC");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("punctuation remains unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher("$%^a293';;", 1)).toBe("$%^b293';;")
});

test("shift factor of 26 returns the original string", () => {
  expect(caesarCipher("abc", 26)).toBe("abc");
  expect(caesarCipher("xyz", 26)).toBe("xyz");
  expect(caesarCipher("hello", 26)).toBe("hello");
});

test("shift factors greater than 26 do not break the program", () => {
  expect(caesarCipher("abc", 27)).toBe("bcd");
  expect(caesarCipher("abc", 51)).toBe("zab");
  expect(caesarCipher("abc", 52)).toBe("abc");
  expect(caesarCipher("abc", 53)).toBe("bcd");
  expect(caesarCipher("abc", 353)).toBe("pqr");
});
