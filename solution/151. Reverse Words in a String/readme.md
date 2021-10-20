# [151. Reverse Words in a String (Medium)](https://leetcode.com/problems/reverse-words-in-a-string/)

<p>Given an input string <code>s</code>, reverse the order of the <strong>words</strong>.</p>

<p>A <strong>word</strong> is defined as a sequence of non-space characters. The <strong>words</strong> in <code>s</code> will be separated by at least one space.</p>

<p>Return <em>a string of the words in reverse order concatenated by a single space.</em></p>

<p><b>Note</b> that <code>s</code> may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "the sky is blue"
<strong>Output:</strong> "blue is sky the"
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "  hello world  "
<strong>Output:</strong> "world hello"
<strong>Explanation:</strong> Your reversed string should not contain leading or trailing spaces.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "a good   example"
<strong>Output:</strong> "example good a"
<strong>Explanation:</strong> You need to reduce multiple spaces between two words to a single space in the reversed string.
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> s = "  Bob    Loves  Alice   "
<strong>Output:</strong> "Alice Loves Bob"
</pre>

<p><strong>Example 5:</strong></p>

<pre><strong>Input:</strong> s = "Alice does not even like bob"
<strong>Output:</strong> "bob like even not does Alice"
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> contains English letters (upper-case <bvtag class="memorize_new_word bv_leetcode_com bv_browserName_google_chrome  burning_vocabulary  _id_1625809030584">and</bvtag> lower-case), digits, <bvtag class="memorize_new_word bv_leetcode_com bv_browserName_google_chrome  burning_vocabulary  _id_1625809030584">and</bvtag> spaces <code>' '</code>.</li>
	<li>There is <strong>at least one</strong> word in <code>s</code>.</li>
</ul>

<p>&nbsp;</p>
<p><b data-stringify-type="bold">Follow-up:&nbsp;</b>If the string data type is mutable in your language, can&nbsp;you solve it&nbsp;<b data-stringify-type="bold">in-place</b>&nbsp;with&nbsp;<code data-stringify-type="code">O(1)</code>&nbsp;extra space?</p>


**Related Topics**:  
[Two Pointers](https://leetcode.com/tag/two-pointers/), [String](https://leetcode.com/tag/string/)

**Similar Questions**:
* [Reverse Words in a String II (Medium)](https://leetcode.com/problems/reverse-words-in-a-string-ii/)

## Solution 1.

```js
// OJ: https://leetcode.com/problems/reverse-words-in-a-string/
// Author: www.github.com/faizanurrahman
// Time: O(n)
// Space: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var reverse = "";
    var word = "";
    var left = 0;
    var right = s.length-1;
    // trim left space
    while(s[left] == " "){
        left++;
    }
    // trim right space
    while(s[right] == " "){
        right--;
    }
    while(left <= right){
        if(s[right] != " "){
            word = s[right] + word;
        } else {
            if(word.length > 0) // if multiple space come
                reverse = reverse + word + " ";
            word = "";
        }
        right--;
    }
    return reverse + word;
};

```