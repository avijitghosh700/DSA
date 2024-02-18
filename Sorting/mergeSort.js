const arr = [2, 1, 4, 19, 29, 10, 21, 3, 9];

// /**
//  * @param {number[]} unsortedArray
//  * @return {number[]}
//  */
// //Merge sort using recursion
// const mergeSortRecursion = (unsortedArray) => {
//   //There's no need to split/merge if there's only one element
//   if (unsortedArray.length <= 1) {
//     return unsortedArray;
//   }

//   //Now we divide the array in half
//   //we first need to find the middle point
//   //We use Math.floor to avoid decimals in an odd length array
//   const midPoint = Math.floor(unsortedArray.length / 2);

//   //Now we get the left and right part of the array
//   const leftArr = unsortedArray.slice(0, midPoint);
//   const rightArr = unsortedArray.slice(midPoint);

//   //Now we merge the two arrays using recursion to keep finding the left and right array.
//   return mergeTwoArrays(mergeSortRecursion(leftArr), mergeSortRecursion(rightArr));
// };

// /**
//  * @param {number[]} leftArr
//  * @param {number[]} rightArr
//  * @return {number[]}
//  */
// //Merge two arrays assuming both is already organized
// const mergeTwoArrays = (leftArr, rightArr) => {
//   //We first make an var where we push the values into from the both array.
//   let resultArray = [];
//   //We also make two more index keeping track of the position of left and right array
//   //Since both arrays are organized, we'll move from the smallest number to the largest.
//   let leftIndex = 0,
//     rightIndex = 0;

//   //We will keep merging as long as there's still numbers from any of the array unadded
//   while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
//     //If the value on the left array is lower, we add that one into the result
//     if (leftArr[leftIndex] < rightArr[rightIndex]) {
//       resultArray.push(leftArr[leftIndex]);
//       leftIndex++; //Since we added the value from left index, lets increment it.
//     } //Otherwise, we add in the value of the right array.
//     else {
//       resultArray.push(rightArr[rightIndex]);
//       rightIndex++; //Since we added the value from right index, lets increment it.
//     }
//   }

//   //However once one side is all finished, the other array is untouched
//   //So lets start by checking if it's the left side undefined and add it to the result
//   if (leftArr[leftIndex]) {
//     //We first start by getting all the unadded elements on the left
//     var unaddedElements = leftArr.slice(leftIndex);
//     //Then we push in the unadded elements using the spread operator
//     resultArray.push(...unaddedElements);
//   } //If it's not left, then it's for sure the right array
//   else {
//     //We first start by getting all the unadded elements on the right
//     var unaddedElements = rightArr.slice(rightIndex);
//     //Then we push in the unadded elements using the spread operator
//     resultArray.push(...unaddedElements);
//   }

//   return resultArray;
// };

const merge = (arr, l, m, r) => {
  const temp = [];
  let left = l;
  let right = m + 1;

  while (left <= m && right <= r) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= m) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= r) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = l; i <= r; i++) {
    arr[i] = temp[i - l];
  }

  // Cheking whether the start and end index covers the full array length and returning the sorted array.
  if (l === 0 && r === arr.length - 1) return arr;
};

const mergeSort = (arr, l, r) => {
  if (l >= r) return;

  const mid = Math.floor((l + r) / 2);

  mergeSort(arr, l, mid); // Left part
  mergeSort(arr, mid + 1, r); // Right part
  return merge(arr, l, mid, r);
};

console.log(mergeSort(arr, 0, arr.length - 1));
