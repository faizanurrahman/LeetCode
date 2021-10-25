// OJ: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
 var p1 = head;
 var p2 = head;
 for (var i = 0; i < n; i++) {
  p2 = p2.next;
 }
 if (p2 == null) {
  p1 = p1.next;
  return p1;
 }
 while (p2.next) {
  p1 = p1.next;
  p2 = p2.next;
 }
 p1.next = p1.next.next;
 return head;
};