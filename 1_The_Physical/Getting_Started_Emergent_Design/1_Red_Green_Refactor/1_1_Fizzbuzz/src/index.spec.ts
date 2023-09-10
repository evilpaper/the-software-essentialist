import { fizzBuzz } from "./fizzbuzz";

describe("fizzBuzz", () => {
  it("each return value is a string", () => {
    expect(typeof fizzBuzz(3)).toBe("string");
  });
  it("43 returns '43'", () => {
    expect(fizzBuzz(43)).toEqual("43");
  });
  it("102 should throw 'The number should be between 1 to 100'", () => {
    expect(() => fizzBuzz(102)).toThrow(
      "The number should be between 1 to 100"
    );
  });
});

describe('returns "Fizz" for multiples of 3', () => {
  [3, 6, 9, 42].forEach((num) => {
    test(`when given ${num} it returns "Fizz`, () => {
      expect(fizzBuzz(num)).toEqual("Fizz");
    });
  });
});

describe('returns "Buzz" for multiples of 5', () => {
  [5, 10, 20].forEach((num) => {
    test(`when given ${num} it returns "Buzz"`, () => {
      expect(fizzBuzz(num)).toEqual("Buzz");
    });
  });
});

describe('return "FizzBuzz" when given a multiple of 3 and 5', () => {
  [15, 30, 45, 60, 75, 90].forEach((num) => {
    test(`when given ${num} it returns "FizzBuzz"`, () => {
      expect(fizzBuzz(num)).toEqual("FizzBuzz");
    });
  });
});
