# [344. Reverse String (Easy)](https://leetcode.com/problems/reverse-string/)

<p>Write a function that reverses a string. The input string is given as an array of characters <code>s</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> s = ["h","e","l","l","o"]
<strong>Output:</strong> ["o","l","l","e","h"]
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> s = ["H","a","n","n","a","h"]
<strong>Output:</strong> ["h","a","n","n","a","H"]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s[i]</code> is a <a href="https://en.wikipedia.org/wiki/ASCII#Printable_characters" target="_blank">printable ascii character</a>.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Do not allocate extra space for another array. You must do this by modifying the input array <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a> with <code>O(1)</code> extra memory.</p>


**Related Topics**:  
[Two Pointers](https://leetcode.com/tag/two-pointers/), [String](https://leetcode.com/tag/string/), [Recursion](https://leetcode.com/tag/recursion/)

**Similar Questions**:
* [Reverse Vowels of a String (Easy)](https://leetcode.com/problems/reverse-vowels-of-a-string/)
* [Reverse String II (Easy)](https://leetcode.com/problems/reverse-string-ii/)

## Solution 1.

```js
// OJ: https://leetcode.com/problems/reverse-string/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var left = 0; 
    var right = s.length - 1;
    while(left < right){
        if(s[left] == s[right]){
            left++;
            right--;
            continue;
        }
        var temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};

```