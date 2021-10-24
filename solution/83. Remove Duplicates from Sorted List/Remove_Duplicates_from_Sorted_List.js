// OJ: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
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
var deleteDuplicates = function (head) {
    if (head == null || head.next == null) return head;
    let curr = head;
    let value = null;
    while (curr.next) {
        if (curr.val == curr.next.val) {
            var temp = curr.next;
            curr.next = curr.next.next;
            delete temp;
        } else {
            curr = curr.next;
        }
    }
    return head;
};