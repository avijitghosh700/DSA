/**
 * Swaps two elements in an array.
 * This utility function is used to modify the array in place by swapping
 * the elements at two given indexes.
 *
 * @param {number[]} arr - The array containing the elements to swap.
 * @param {number} i - The index of the first element.
 * @param {number} j - The index of the second element.
 */
function swap(arr, i, j) {
  let temp = arr[i]; // Temporary storage of the first element
  arr[i] = arr[j]; // Assign the second element's value to the first element's position
  arr[j] = temp; // Move the first element's stored value to the second element's position
}

/**
 * Partitions the array around a pivot.
 * This function rearranges the elements of the array such that all elements
 * less than the pivot are moved to its left, and all elements greater than
 * the pivot are moved to its right. The pivot element itself ends up in its
 * final sorted position.
 *
 * @param {number[]} arr - The array to partition.
 * @param {number} low - The starting index of the portion to partition.
 * @param {number} high - The ending index of the portion to partition.
 * @return {number} The index of the pivot after partitioning.
 */
function partition(arr, low, high) {
  let pivot = arr[high]; // Using the last element as the pivot
  let i = low - 1; // Tracks the last index of the smaller element

  // Iterate through the array, excluding the pivot
  for (let j = low; j < high; j++) {
    // If current element is smaller than the pivot, it's placed on the left side
    if (arr[j] < pivot) {
      i++; // Move the boundary of smaller elements one step ahead
      swap(arr, i, j); // Swap the current element with the element at the new boundary
    }
  }

  // After the loop, swap the pivot with the element just after the last smaller element
  swap(arr, i + 1, high);

  // Return the final position of the pivot, now all elements left of it are smaller,
  // and all elements right of it are greater or equal
  return i + 1;
}

/**
 * The main QuickSort function that implements the QuickSort algorithm recursively.
 * It sorts a part of the array between two indexes (inclusive) by partitioning the
 * array around a pivot element, then recursively applying the same logic to the
 * subarrays formed by dividing the array at the pivot's position.
 *
 * @param {number[]} arr - The array to sort.
 * @param {number} low - The starting index of the array to sort.
 * @param {number} high - The ending index of the array to sort.
 * @return {number[]} The sorted array.
 */
function quickSort(arr, low, high) {
  if (low < high) {
    // Partition the array and get the pivot's final position
    let pi = partition(arr, low, high);

    // Recursively apply QuickSort to the sub-array to the left of the pivot
    quickSort(arr, low, pi - 1);
    // Recursively apply QuickSort to the sub-array to the right of the pivot
    quickSort(arr, pi + 1, high);
  }
  return arr; // The array is sorted in place and returned
}

// Example usage
// console.log(quickSort([2, 1, 4, 19, 29, 10, 21, 3, 9], 0, 8));

console.log(
  quickSort(
    [
      523, 234, 111, 562, 897, 341, 256, 431, 92, 345, 678, 789, 12, 457, 368, 129, 746, 985, 204,
      673, 442, 555, 234, 978, 659, 321, 875, 233, 556, 123, 490, 367, 456, 789, 210, 654, 321, 902,
      438, 657, 234, 789, 123, 456, 789, 101, 202, 303, 404, 505, 111, 222, 333, 444, 555, 666, 777,
      888, 999, 1010, 121, 232, 343, 454, 565, 676, 787, 898, 909, 2020, 212, 323, 434, 545, 656,
      767, 878, 989, 1011, 1112, 122, 233, 344, 455, 566, 677, 788, 899, 900, 1001, 102, 203, 304,
      405, 506, 607, 708, 809, 910, 1011,
    ],
    0,
    99
  )
);
