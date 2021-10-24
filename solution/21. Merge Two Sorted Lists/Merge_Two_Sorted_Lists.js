// OJ: https://leetcode.com/problems/merge-two-sorted-lists/
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let merge = { val: 0, next: null };
    let temp = merge;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            temp.next = l1;
            l1 = l1.next;
            temp = temp.next;
        } else {
            temp.next = l2;
            l2 = l2.next;
            temp = temp.next;
        }
    }
    if (l1) {
        temp.next = l1
    } else {
        temp.next = l2;
    }
    return merge.next;
};