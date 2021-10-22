# [383. Ransom Note (Easy)](https://leetcode.com/problems/ransom-note/)

<p>Given two stings <code>ransomNote</code> and <code>magazine</code>, return <code>true</code> if <code>ransomNote</code> can be constructed from <code>magazine</code> and <code>false</code> otherwise.</p>

<p>Each letter in <code>magazine</code> can only be used once in <code>ransomNote</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> ransomNote = "a", magazine = "b"
<strong>Output:</strong> false
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> ransomNote = "aa", magazine = "ab"
<strong>Output:</strong> false
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> ransomNote = "aa", magazine = "aab"
<strong>Output:</strong> true
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= ransomNote.length, magazine.length &lt;= 10<sup>5</sup></code></li>
	<li><code>ransomNote</code> and <code>magazine</code> consist of lowercase English letters.</li>
</ul>


**Related Topics**:  
[Hash Table](https://leetcode.com/tag/hash-table/), [String](https://leetcode.com/tag/string/), [Counting](https://leetcode.com/tag/counting/)

**Similar Questions**:
* [Stickers to Spell Word (Hard)](https://leetcode.com/problems/stickers-to-spell-word/)

## Solution 1.

```js
// OJ: https://leetcode.com/problems/ransom-note/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var map1 = {};
    for(var i = 0; i < ransomNote.length; i++){
        if(map1[ransomNote[i]] === undefined)
            map1[ransomNote[i]] = 1
        else 
            map1[ransomNote[i]] += 1
    }
    var map2 = {};
    for(var i = 0; i < magazine.length; i++){
        if(map2[magazine[i]] === undefined)
            map2[magazine[i]] = 1
        else 
            map2[magazine[i]] += 1
    }
    for(k in map1){
        if(map2[k] === undefined) return false;
        if(map2[k] < map1[k]) return false;
    }
    return true;
};

```