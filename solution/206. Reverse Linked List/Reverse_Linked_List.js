// OJ: https://leetcode.com/problems/reverse-linked-list/
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
var reverseList = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    var prev = null;
    var curr = head;
    var next = head;
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;
    return head;
};