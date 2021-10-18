
// OJ: https://leetcode.com/problems/two-sum/
// Author: www.github.com/faizanurrahman
// Time: O(n)
// Space: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] == undefined) {
            map[nums[i]] = i;
        } else {
            var out = [];
            out.push(map[target - nums[i]]);
            out.push(i);
            return out;
        }
    }
};


// test case
var nums = [2, 7, 11, 15];
var target = 9;

var ans = twoSum(nums, target);
console.log(ans);