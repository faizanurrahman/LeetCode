// OJ: https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null) {
        return 0;
    }
    var d = maxDepth(root.left) + 1;
    var y = maxDepth(root.right) + 1;
    if (x > y) {
        return x;
    } else {
        return y;
    }
};