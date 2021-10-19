// OJ: https://leetcode.com/problems/jump-game-ii/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    // edge case
    if (nums.length == 2) {
        return 1;
    }
    if (nums.length == 1) {
        return 0;
    }
    var index = nums[0];
    var max = nums[0];
    var count = 1;
    for (var i = 0; i < nums.length - 1; i++) {
        var limit = i + nums[i];
        if (limit >= nums.length - 1) {
            return count;
        }
        var index = 0;
        for (var j = i; j <= limit; j++) {
            if (max < nums[j] + j) {
                max = nums[j] + j;
                index = j;
            }
        }
        count++;
        i = index - 1;
    }
    return count;
};