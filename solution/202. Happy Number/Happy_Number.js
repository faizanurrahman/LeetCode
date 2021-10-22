// OJ: https://leetcode.com/problems/happy-number/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let map = {};
    map[n] = 1;
    while (true) {
        var sum = 0;
        while (n) {
            sum += (n % 10) ** 2;
            n = (n - n % 10) / 10;
        }
        n = sum;
        if (n == 1) { return true; }
        if (map[n] !== undefined) { return false };
        map[n] = 1;
    }
};