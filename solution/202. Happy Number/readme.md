# [202. Happy Number (Easy)](https://leetcode.com/problems/happy-number/)

<p>Write an algorithm to determine if a number <code>n</code> is happy.</p>

<p>A <strong>happy number</strong> is a number defined by the following process:</p>

<ul>
	<li>Starting with any positive integer, replace the number by the sum of the squares of its digits.</li>
	<li>Repeat the process until the number equals 1 (where it will stay), or it <strong>loops endlessly in a cycle</strong> which does not include 1.</li>
	<li>Those numbers for which this process <strong>ends in 1</strong> are happy.</li>
</ul>

<p>Return <code>true</code> <em>if</em> <code>n</code> <em>is a happy number, and</em> <code>false</code> <em>if not</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> n = 19
<strong>Output:</strong> true
<strong>Explanation:</strong>
1<sup>2</sup> + 9<sup>2</sup> = 82
8<sup>2</sup> + 2<sup>2</sup> = 68
6<sup>2</sup> + 8<sup>2</sup> = 100
1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> = 1
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> n = 2
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>


**Related Topics**:  
[Hash Table](https://leetcode.com/tag/hash-table/), [Math](https://leetcode.com/tag/math/), [Two Pointers](https://leetcode.com/tag/two-pointers/)

**Similar Questions**:
* [Linked List Cycle (Easy)](https://leetcode.com/problems/linked-list-cycle/)
* [Add Digits (Easy)](https://leetcode.com/problems/add-digits/)
* [Ugly Number (Easy)](https://leetcode.com/problems/ugly-number/)
* [Sum of Digits of String After Convert (Easy)](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/)

## Solution 1.

```js
// OJ: https://leetcode.com/problems/happy-number/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let map = {};
    map[n] = 1;
    while(true){
        var sum = 0;
        while(n){
            sum += (n%10)**2;
            n = (n - n %10)/10;
        }
        n = sum;
        if(n == 1) {return true;}
        if(map[n] !== undefined){ return false};
        map[n] = 1;
    }
};

```