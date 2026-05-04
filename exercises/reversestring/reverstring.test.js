const {
  reverseString1,
  reverseString2,
  reverseString3,
  reverseString4,
  reverseString5,
} = require("./reverstring");

const solutions = [
  { name: "split-reverse-join", fn: reverseString1 },
  { name: "for loop", fn: reverseString2 },
  { name: "reduce", fn: reverseString3 },
  { name: "forEach", fn: reverseString4 },
  { name: "do...while", fn: reverseString5 },
];

solutions.forEach(({ name, fn }) => {
  describe(`reverseString - ${name}`, () => {
    test('reverses "hello" to "olleh"', () => {
      expect(fn("hello")).toBe("olleh");
    });

    test('reverses "hello world" to "dlrow olleh"', () => {
      expect(fn("hello world")).toBe("dlrow olleh");
    });

    test("reverses a single character", () => {
      expect(fn("a")).toBe("a");
    });

    test("reverses numbers in a string", () => {
      expect(fn("12345")).toBe("54321");
    });

    test("handles string with spaces", () => {
      expect(fn("  ab  ")).toBe("  ba  ");
    });

    test("handles special characters", () => {
      expect(fn("hi!@#")).toBe("#@!ih");
    });

    test('reverses "himanshu" correctly', () => {
      expect(fn("himanshu")).toBe("uhsnamih");
    });
  });
});
