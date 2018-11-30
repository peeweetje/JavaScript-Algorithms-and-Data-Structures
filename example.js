// Write a function that caculates the sum of all numbers
// from 1 up to (and including) some number n

function CalculateAllNumbers(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(CalculateAllNumbers(6)); // 21

// how fast does this code above execute?
var time1 = performance.now();
CalculateAllNumbers(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time1 - time2) / 1000}seconds`);

//==========================================================================================

function CalculateAllNumbers(n) {
  // 6 * (6 + 1) / 2 = 7 * 6 / 2 = 42 / 2 = 21
  return (n * (n + 1)) / 2;
}
console.log(CalculateAllNumbers(6)); // 21

// how fast does this code above execute?
var time1 = performance.now();
CalculateAllNumbers(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time1 - time2) / 1000}seconds`);
