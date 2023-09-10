export function fizzBuzz(number: number) {
  if (number < 1 || number > 100)
    throw new Error("The number should be between 1 to 100");
  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";
  return `${number}`;
}
