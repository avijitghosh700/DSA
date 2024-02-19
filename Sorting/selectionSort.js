const arr = [100, 2, 1, 4, 19, 29, 10, 21, 3, 9];

/**
 * @param {number[]} unsortedArray
 * @return {number[]}
 */
const selectionSort = (arr) => {
  for (let idx1 = 0; idx1 < arr.length; idx1++) {
    let min = idx1;

    for (let idx2 = min + 1; idx2 <= arr.length; idx2++) {
      if (arr[min] > arr[idx2]) {
        min = idx2;
      }
    }

    let temp = arr[min];
    arr[min] = arr[idx1];
    arr[idx1] = temp;
  }

  return arr;
};

console.log(selectionSort(arr));
