// OJ: https://leetcode.com/problems/binary-tree-preorder-traversal/
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
 * @return {number[]}
 */
function traverse(root, list) {
    if (root == null) return;
    list.push(root.val);
    traverse(root.left, list);
    traverse(root.right, list);
}
var preorderTraversal = function (root) {
    var porder = [];
    traverse(root, porder);
    return porder;
};