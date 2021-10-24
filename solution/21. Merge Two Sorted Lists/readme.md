# [21. Merge Two Sorted Lists (Easy)](https://leetcode.com/problems/merge-two-sorted-lists/)

<p>Merge two sorted linked lists and return it as a <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" style="width: 662px; height: 302px;">
<pre><strong>Input:</strong> l1 = [1,2,4], l2 = [1,3,4]
<strong>Output:</strong> [1,1,2,3,4,4]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> l1 = [], l2 = []
<strong>Output:</strong> []
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> l1 = [], l2 = [0]
<strong>Output:</strong> [0]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in both lists is in the range <code>[0, 50]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
	<li>Both <code>l1</code> and <code>l2</code> are sorted in <strong>non-decreasing</strong> order.</li>
</ul>


**Related Topics**:  
[Linked List](https://leetcode.com/tag/linked-list/), [Recursion](https://leetcode.com/tag/recursion/)

**Similar Questions**:
* [Merge k Sorted Lists (Hard)](https://leetcode.com/problems/merge-k-sorted-lists/)
* [Merge Sorted Array (Easy)](https://leetcode.com/problems/merge-sorted-array/)
* [Sort List (Medium)](https://leetcode.com/problems/sort-list/)
* [Shortest Word Distance II (Medium)](https://leetcode.com/problems/shortest-word-distance-ii/)
* [Add Two Polynomials Represented as Linked Lists (Medium)](https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/)
* [Longest Common Subsequence Between Sorted Arrays (Medium)](https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/)

## Solution 1.

```js
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
var mergeTwoLists = function(l1, l2) {
    let merge = {val:0, next:null};
    let temp = merge;
    while(l1 && l2){
        if(l1.val < l2.val){
            temp.next = l1;
            l1 = l1.next;
            temp = temp.next;
        } else {
            temp.next = l2;
            l2 = l2.next;
            temp = temp.next;
        }
    }
    if(l1){
        temp.next = l1
    } else {
        temp.next = l2;
    }
    return merge.next;
};

```