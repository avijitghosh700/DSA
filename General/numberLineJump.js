// kangaroo has the following parameter(s):
// * int x1, int v1: starting position and jump distance for kangaroo 1
// * int x2, int v2: starting position and jump distance for kangaroo 2

// Returns
// * string: either YES or NO

function kangaroo(x1, v1, x2, v2) {
  let n = 0; // Jumps

  while (n < 10000) {
    if (x1 + n * v1 === x2 + n * v2) {
      return "YES";
    }
    n++;
  }
  return "NO";
}

console.log(kangaroo(42, 3, 94, 2));
// console.log(kangaroo(0, 2, 5, 3));
