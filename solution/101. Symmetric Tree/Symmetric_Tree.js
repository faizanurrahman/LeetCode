// OJ: https://leetcode.com/problems/symmetric-tree/
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
 * @return {boolean}
 */
function test(root1, root2) {
 if (root1 == null && root2 == null) return true;
 if (root1 == null || root2 == null) return false;
 if (root1.val != root2.val) {
  return false;
 }
 return test(root1.left, root2.right) && test(root1.right, root2.left);
}
var isSymmetric = function (root) {
 if (test(root.left, root.right)) {
  return true;
 } else {
  return false;
 }
};