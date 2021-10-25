// OJ: https://leetcode.com/problems/middle-of-the-linked-list/
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
 * @return {ListNode}
 */
var middleNode = function (head) {
 var p1 = head;
 var p2 = head.next;
 while (p2) {
  p1 = p1.next;
  p2 = p2.next;
  if (p2) {
   p2 = p2.next;
  }
 }
 return p1;
};