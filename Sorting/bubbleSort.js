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
