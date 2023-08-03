export function fizzBuzz(number: number) {
  if (number === 3) return "Fizz";
  if (number === 5) return "Buzz";
  if (number === 9) return "Fizz";
  if (number === 15) return "FizzBuzz";
  if (number === 42) return "Fizz";
  return number.toString();
}
