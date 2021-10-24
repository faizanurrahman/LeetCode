// OJ: https://leetcode.com/problems/valid-parentheses/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let top = -1;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == ')' || s[i] == '}' || s[i] == ']') {
            if (top == -1) return false;
            if (stack[top] == '(' && s[i] == ')' ||
                stack[top] == '{' && s[i] == '}' ||
                stack[top] == '[' && s[i] == ']'
            ) {
                stack.pop(top);
                top--;
            } else {
                return false;
            }
        } else {
            stack.push(s[i]);
            top++;
        }
    }
    if (top == -1) {
        return true;
    } else {
        return false;
    }
};