// Test cases
// let arr = [1, 2, 3, 4, 5];
let arr = [15, 25, 5, 12, 25];
// let arr = [5, 2, 5, 2, 5];
// let arr = [5, 1, 5, 2, 5];
// let arr = [5, 5, 5, 5, 5];

// Slow method
// function birthdayCakeCandles(candles) {
//   let sortedData = candles.sort((a, b) => a - b);
//   let filteredData = [];
  
//   for (let [index, item] of sortedData.entries()) {
//     if (item === Math.max(...sortedData)) {
//       filteredData.push(item);
//     }
//   }
//   // console.log(filteredData.length);
//   return filteredData.length;
// }

// birthdayCakeCandles(arr)

// Fast method
function birthdayCakeCandles(candles) {
  candles.sort((a, b) => a - b);
  const max = candles[candles.length - 1];
  console.log(candles)
  return candles.filter(candleHeight => candleHeight === max).length;
}

console.log(birthdayCakeCandles(arr));