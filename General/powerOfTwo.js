/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n) => {
  if (n <= 0) return false;

  // for (let i = 0; i < n; i++) {
  //     if (Math.pow(2, i) === n) return true;
  // }

  // return false;

  return Math.floor(Math.log2(n)) === Math.ceil(Math.log2(n));
};

console.log(isPowerOfTwo(32));