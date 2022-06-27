/**
 * @param {number} x
 * @return {boolean}
 */
//https://leetcode.com/problems/palindrome-number
var isPalindrome = function (x) {
  const reverse = x.toString().split("").reverse().join("");
  const toStringX = x.toString();
  if (toStringX === reverse) {
    return true;
  }
  return false;
};
