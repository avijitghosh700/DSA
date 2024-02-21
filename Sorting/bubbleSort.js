/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
 */
const bubbleSort = (arr, n) => {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
};

// console.log(bubbleSort([1, 4, 2, 3], 4));
console.log(bubbleSort([2, 1, 4, 19, 29, 10, 21, 3, 9], 9));