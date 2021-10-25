// OJ: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
 var map = {};
 for (var i = 0; i < numbers.length; i++) {
  if (map[target - numbers[i]] == undefined) {
   map[numbers[i]] = i + 1;
  } else {
   var out = [];
   out.push(map[target - numbers[i]], i + 1);
   return out;
  }
 }
};