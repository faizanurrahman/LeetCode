// OJ: https://leetcode.com/problems/remove-linked-list-elements/
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    var curr = head;
    while (curr != null) {
        if (head.val == val) {
            head = head.next;
            curr = head;
        } else if (curr.next != null && curr.next.val == val) {
            var temp = curr.next;
            curr.next = curr.next.next;
            delete temp;
        }
        else {
            curr = curr.next;
        }
    }
    return head;
};