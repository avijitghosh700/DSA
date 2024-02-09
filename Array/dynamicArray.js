/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

// 2, [[1,0,5], [1,1,7], [1,0,3], [2,1,0], [2,1,1]]

const n = 2;
const queries = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
];

function dynamicArray(n, queries) {
  let newArr = new Array(n).fill(0).map((_) => []);
  let lastAnswer = 0;
  let answer = [];

  queries.forEach((elem) => {
    let [i, x, y] = elem;
    let pos = (x ^ lastAnswer) % n;

    console.log(pos, [i, x, y]);

    switch (i) {
      case 1:
        newArr[pos].push(y);
        break;
      case 2:
        lastAnswer = newArr[pos][y % newArr[pos].length];
        answer.push(lastAnswer);
        break;
    }
  });

  return answer;
}

console.log(dynamicArray(n, queries));