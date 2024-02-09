/* 
  Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
  Then print the respective minimum and maximum values as a single line of two space - separated long integers.
*/
// Test cases
// let arr = [1, 2, 3, 4, 5];
// let arr = [5, 5, 5, 2, 5];
// let arr = [5, 2, 5, 2, 5];
let arr = [5, 1, 5, 2, 5];
// let arr = [5, 5, 5, 5, 5];

function miniMaxSum(arr) {
  let filteredIntArr = [];
  let maxArr = [];
  let miniArr = [];
  let max = null;
  let min = null;

  filteredIntArr = arr.sort((a, b) => a - b);
  maxArr = filteredIntArr.slice(1);
  miniArr = filteredIntArr.slice(0, -1);

  max = maxArr.reduce((acc, curr) => (acc + curr));
  min = miniArr.reduce((acc, curr) => (acc + curr));
  console.log(`[${maxArr}]: ${max}`);
  console.log(`[${miniArr}]: ${min}`);

  // More shorter version to print just the minimum and maximum sum
  // const sum = filteredIntArr.reduce((acc, curr) => (acc + curr), 0);
  // console.log(sum - filteredIntArr[filteredIntArr.length - 1], sum - filteredIntArr[0]);
}

miniMaxSum(arr);