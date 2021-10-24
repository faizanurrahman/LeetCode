// OJ: https://leetcode.com/problems/binary-tree-postorder-traversal/
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
var traversal = function (root, list) {
    if (root == null) return;
    traversal(root.left, list);
    traversal(root.right, list);
    list.push(root.val);
}
var postorderTraversal = function (root) {
    let order = [];
    traversal(root, order);
    return order;
};