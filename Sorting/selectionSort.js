const arr = [100, 2, 1, 4, 19, 29, 10, 21, 3, 9];

/**
 * @param {number[]} unsortedArray
 * @return {number[]}
 */
const selectionSort = (unsortedArray) => {
  const result = [];

  for (let idx1 = 0; idx1 < unsortedArray.length; idx1++) {
    for (let idx2 = 0; idx2 < unsortedArray.length; idx2++) {
      if (unsortedArray[idx1] < unsortedArray[idx2]) {
        let temp = unsortedArray[idx1];
        unsortedArray[idx1] = unsortedArray[idx2];
        unsortedArray[idx2] = temp;
      }
    }
  }

  result.push(...unsortedArray);
  return result;
};

console.log(selectionSort(arr));
