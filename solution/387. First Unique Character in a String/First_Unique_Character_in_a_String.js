// OJ: https://leetcode.com/problems/first-unique-character-in-a-string/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map = {};
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = 1;
        } else {
            map[s[i]] += 1;
        }
    }
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] == 1) {
            return i;
        }
    }
    return -1;
};