// OJ: https://leetcode.com/problems/next-greater-element-i/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    var output = new Array(nums1.length).fill(-1);
    for (var i = 0; i < nums1.length; i++) {
        for (var j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                for (var k = j + 1; k < nums2.length; k++) {
                    if (nums2[k] > nums1[i]) {
                        output[i] = nums2[k];
                        break;
                    }
                }
            }
        }
    }
    return output;
};