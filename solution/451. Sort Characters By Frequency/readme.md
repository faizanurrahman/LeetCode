# [451. Sort Characters By Frequency (Medium)](https://leetcode.com/problems/sort-characters-by-frequency/)

<p>Given a string <code>s</code>, sort it in <strong>decreasing order</strong> based on the <strong>frequency</strong> of the characters. The <strong>frequency</strong> of a character is the number of times it appears in the string.</p>

<p>Return <em>the sorted string</em>. If there are multiple answers, return <em>any of them</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "tree"
<strong>Output:</strong> "eert"
<strong>Explanation:</strong> 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "cccaaa"
<strong>Output:</strong> "aaaccc"
<strong>Explanation:</strong> Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "Aabb"
<strong>Output:</strong> "bbAa"
<strong>Explanation:</strong> "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 5 * 10<sup>5</sup></code></li>
	<li><code>s</code> consists of uppercase and lowercase English letters and digits.</li>
</ul>


**Related Topics**:  
[Hash Table](https://leetcode.com/tag/hash-table/), [String](https://leetcode.com/tag/string/), [Sorting](https://leetcode.com/tag/sorting/), [Heap (Priority Queue)](https://leetcode.com/tag/heap-priority-queue/), [Bucket Sort](https://leetcode.com/tag/bucket-sort/), [Counting](https://leetcode.com/tag/counting/)

**Similar Questions**:
* [Top K Frequent Elements (Medium)](https://leetcode.com/problems/top-k-frequent-elements/)
* [First Unique Character in a String (Easy)](https://leetcode.com/problems/first-unique-character-in-a-string/)
* [Sort Array by Increasing Frequency (Easy)](https://leetcode.com/problems/sort-array-by-increasing-frequency/)

## Solution 1.

```js
// OJ: https://leetcode.com/problems/sort-characters-by-frequency/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var map = {};
    for(var i = 0; i < s.length; i++){
        if(map[s[i]] ===undefined) {
            map[s[i]] = 1;
        } else {
            map[s[i]] += 1;
        }
    }
    var out = "";
    var values = Object.keys(map).sort((a, b) => map[b] - map[a])
    for(var i = 0; i < values.length; i++){
        var times = map[values[i]];
        for(var j= 0; j < times; j++){
            out += values[i];
        }
    }
    return out;
};

```