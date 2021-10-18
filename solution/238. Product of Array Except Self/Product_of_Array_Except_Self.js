// OJ: https://leetcode.com/problems/product-of-array-except-self/
// Author: www.github.com/faizanurrahman
// Time: O(n)
// Space: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    var answer = new Array(nums.length).fill(0);
    var totalProduct = 1;
    var countZero = 0;
    var zeroLocation = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            zeroLocation = i;
            countZero++;
        } else {
            totalProduct *= nums[i];
        }
    }
    // if nums contain two zero 
    // every element of answer will be zero
    if (countZero >= 2) {
        return answer;
    }
    if (countZero == 1) {
        answer[zeroLocation] = totalProduct;
        return answer;
    }
    for (var i = 0; i < nums.length; i++) {
        answer[i] = totalProduct / nums[i];
    }
    return answer;
};