// OJ: https://leetcode.com/problems/reverse-string/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
 var left = 0;
 var right = s.length - 1;
 while (left < right) {
  if (s[left] == s[right]) {
   left++;
   right--;
   continue;
  }
  var temp = s[left];
  s[left] = s[right];
  s[right] = temp;
  left++;
  right--;
 }
};