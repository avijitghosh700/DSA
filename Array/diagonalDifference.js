let collection = [
  [6, 6, 7, -10, 9, -3, 8, 9, -1],
  [9, 7, -10, 6, 4, 1, 6, 1, 1],
  [-1, -2, 4, 6, 1, -4, -6, 3, 9],
  [-8, 7, 6, -1, -6, -6, 6, -7, 2],
  [-10, -4, 9, 1, -7, 8, -5, 3, -5],
  [-8, -3, -4, 2, -3, 7, -5, 1, -5],
  [-2, -7, -4, 8, 3, -1, 8, 2, 3],
  [-3, 4, 6, -7, -7, -8, -3, 9, -6],
  [-2, 0, 5, 4, 4, 4, -3, 3, 0],
  // [-2, 0, 5, 4, 4, 4, -3, 3, 0, 1, 20],
];

function diagonalDifference(arr) {
  let diagOne = 0;
  let diagTwo = 0;
  let diff = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr.length !== arr[i].length) {
      return 'Invalid input'
    }

    diagOne += arr[i][i];

    for (let j = (arr.length - 1); j >= 0; j--) {
      diagTwo += arr[i][j - i];
      // console.log(arr[i][i], arr[i][j - i]);
      // console.log(i, j - i);
      break;
    }
  }

  diff = (diagTwo - diagOne);
  return Math.abs(diff);
}

console.log(diagonalDifference(collection));