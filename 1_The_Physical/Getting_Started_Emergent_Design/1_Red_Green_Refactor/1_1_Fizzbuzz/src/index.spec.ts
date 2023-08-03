import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("each return value is a string", () => {
    expect(typeof fizzBuzz(3)).toBe("string");
  });
});
