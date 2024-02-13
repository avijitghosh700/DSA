/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    let leftChar = s.charAt(leftPointer);
    let rightChar = s.charAt(rightPointer);

    if (leftChar !== rightChar) return false;

    leftPointer++;
    rightPointer--;
  }

  return true;
};


// "A man, a plan, a canal: Panama";
console.log(isPalindrome('Race a car'));

export { isPalindrome };
