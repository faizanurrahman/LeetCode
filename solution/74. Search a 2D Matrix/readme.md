# [74. Search a 2D Matrix (Medium)](https://leetcode.com/problems/search-a-2d-matrix/)

<p>Write an efficient algorithm that searches for a value in an <code>m x n</code> matrix. This matrix has the following properties:</p>

<ul>
	<li>Integers in each row are sorted from left to right.</li>
	<li>The first integer of each row is greater than the last integer of the previous row.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/mat.jpg" style="width: 322px; height: 242px;">
<pre><strong>Input:</strong> matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
<strong>Output:</strong> true
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg" style="width: 322px; height: 242px;">
<pre><strong>Input:</strong> matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 100</code></li>
	<li><code>-10<sup>4</sup> &lt;= matrix[i][j], target &lt;= 10<sup>4</sup></code></li>
</ul>


**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Binary Search](https://leetcode.com/tag/binary-search/), [Matrix](https://leetcode.com/tag/matrix/)

**Similar Questions**:
* [Search a 2D Matrix II (Medium)](https://leetcode.com/problems/search-a-2d-matrix-ii/)

## Solution 1.

```js
// OJ: https://leetcode.com/problems/search-a-2d-matrix/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length;
    let left = 0;
    let right = row*col - 1;
    while(left <= right){
        var mid = Math.floor((left + right)/2);
        // convert linear to 2d array index
        var j = mid % col;
        var i = Math.floor(mid / col);
        if(matrix[i][j] == target){
            return true;
        } else if (matrix[i][j] > target){
            right = col*i + j -1;
        } else {
            left = col*i + j + 1;
        }
    }
    return false;
};
```