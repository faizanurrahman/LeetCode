// OJ: https://leetcode.com/problems/move-zeroes/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
 var left = 0;
 for (var i = 0; i < nums.length; i++) {
  if (nums[i] != 0) {
   var temp = nums[left];
   nums[left] = nums[i];
   nums[i] = temp;
   left++;
  }
 }
};