# [118. Pascal's Triangle (Easy)](https://leetcode.com/problems/pascals-triangle/)

<p>Given an integer <code>numRows</code>, return the first numRows of <strong>Pascal's triangle</strong>.</p>

<p>In <strong>Pascal's triangle</strong>, each number is the sum of the two numbers directly above it as shown:</p>
<img alt="" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif" style="height:240px; width:260px">
<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> numRows = 5
<strong>Output:</strong> [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> numRows = 1
<strong>Output:</strong> [[1]]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= numRows &lt;= 30</code></li>
</ul>


**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)

**Similar Questions**:
* [Pascal's Triangle II (Easy)](https://leetcode.com/problems/pascals-triangle-ii/)

## Solution 1.

```js
// OJ: https://leetcode.com/problems/pascals-triangle/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var pascal = [[1]];
    for(var row = 1; row < numRows; row++){
        var row_pascal = new Array(row + 1);
        for(var col = 0; col < row_pascal.length; col++) {
            if(col != 0 && col != row_pascal.length - 1) {
                row_pascal[col] = pascal[row - 1][col] + pascal[row - 1][col - 1];
            } else {
                row_pascal[col] = 1;
            }
        }
        pascal.push(row_pascal);
    }
    return pascal;
};

```