import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("each return value is a string", () => {
    expect(typeof fizzBuzz(3)).toBe("string");
  });
  it("returns 'Fizz' for multiples of 3", () => {
    [3, 6, 9, 42]
      .map((multiple) => fizzBuzz(multiple))
      .forEach((m) => expect(m).toEqual("Fizz"));
  });
  it("returns 'Buzz' for multiples of 5", () => {
    [5, 10, 20]
      .map((multiple) => fizzBuzz(multiple))
      .forEach((m) => expect(m).toEqual("Buzz"));
  });
  it("returns 'FizzBuzz' for multiples of both 3 and 5", () => {
    [15, 30, 45]
      .map((multiple) => fizzBuzz(multiple))
      .forEach((m) => expect(m).toEqual("FizzBuzz"));
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
