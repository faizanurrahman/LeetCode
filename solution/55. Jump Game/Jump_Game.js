// OJ: https://leetcode.com/problems/jump-game/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    var max_reached = 0;
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] == 0 && max_reached != nums.length - 1 && max_reached <= i) {
            return false;
        }
        if (max_reached < nums[i] + i) {
            max_reached = nums[i] + i;
        }
        if (max_reached >= nums.length - 1) {
            return true;
        }
    }
    if (max_reached >= nums.length - 1) {
        return true;
    } else {
        return false;
    }
};
