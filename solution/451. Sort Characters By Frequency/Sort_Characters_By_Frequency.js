// OJ: https://leetcode.com/problems/sort-characters-by-frequency/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    var map = {};
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = 1;
        } else {
            map[s[i]] += 1;
        }
    }
    var out = "";
    var values = Object.keys(map).sort((a, b) => map[b] - map[a])
    for (var i = 0; i < values.length; i++) {
        var times = map[values[i]];
        for (var j = 0; j < times; j++) {
            out += values[i];
        }
    }
    return out;
};