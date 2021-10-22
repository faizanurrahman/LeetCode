// OJ: https://leetcode.com/problems/ransom-note/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    var map1 = {};
    for (var i = 0; i < ransomNote.length; i++) {
        if (map1[ransomNote[i]] === undefined)
            map1[ransomNote[i]] = 1
        else
            map1[ransomNote[i]] += 1
    }
    var map2 = {};
    for (var i = 0; i < magazine.length; i++) {
        if (map2[magazine[i]] === undefined)
            map2[magazine[i]] = 1
        else
            map2[magazine[i]] += 1
    }
    for (k in map1) {
        if (map2[k] === undefined) return false;
        if (map2[k] < map1[k]) return false;
    }
    return true;
};