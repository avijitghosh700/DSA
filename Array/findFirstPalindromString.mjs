import { isPalindrome } from './checkPalindromString.mjs';

// ["abc", "car", "ada", "racecar", "cool"];
// ["notapalindrome", "racecar"];
// ["def", "ghi"];

var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) return words[i];
  }
  return "";
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));