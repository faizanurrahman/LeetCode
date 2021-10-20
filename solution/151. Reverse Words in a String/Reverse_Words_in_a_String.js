// OJ: https://leetcode.com/problems/reverse-words-in-a-string/
// Author: www.github.com/faizanurrahman
// Time: O(n)
// Space: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    var reverse = "";
    var word = "";
    var left = 0;
    var right = s.length - 1;
    // trim left space
    while (s[left] == " ") {
        left++;
    }
    // trim right space
    while (s[right] == " ") {
        right--;
    }
    while (left <= right) {
        if (s[right] != " ") {
            word = s[right] + word;
        } else {
            if (word.length > 0) // if multiple space come
                reverse = reverse + word + " ";
            word = "";
        }
        right--;
    }
    return reverse + word;
};