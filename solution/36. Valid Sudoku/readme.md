# [36. Valid Sudoku (Medium)](https://leetcode.com/problems/valid-sudoku/)

<p>Determine if a&nbsp;<code>9 x 9</code> Sudoku board&nbsp;is valid.&nbsp;Only the filled cells need to be validated&nbsp;<strong>according to the following rules</strong>:</p>

<ol>
	<li>Each row&nbsp;must contain the&nbsp;digits&nbsp;<code>1-9</code> without repetition.</li>
	<li>Each column must contain the digits&nbsp;<code>1-9</code>&nbsp;without repetition.</li>
	<li>Each of the nine&nbsp;<code>3 x 3</code> sub-boxes of the grid must contain the digits&nbsp;<code>1-9</code>&nbsp;without repetition.</li>
</ol>

<p><strong>Note:</strong></p>

<ul>
	<li>A Sudoku board (partially filled) could be valid but is not necessarily solvable.</li>
	<li>Only the filled cells need to be validated according to the mentioned&nbsp;rules.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png" style="height:250px; width:250px">
<pre><strong>Input:</strong> board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
<strong>Output:</strong> true
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
<strong>Output:</strong> false
<strong>Explanation:</strong> Same as Example 1, except with the <strong>5</strong> in the top left corner being modified to <strong>8</strong>. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>board.length == 9</code></li>
	<li><code>board[i].length == 9</code></li>
	<li><code>board[i][j]</code> is a digit <code>1-9</code> or <code>'.'</code>.</li>
</ul>


**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Hash Table](https://leetcode.com/tag/hash-table/), [Matrix](https://leetcode.com/tag/matrix/)

**Similar Questions**:
* [Sudoku Solver (Hard)](https://leetcode.com/problems/sudoku-solver/)

## Solution 1.

```js
// OJ: https://leetcode.com/problems/valid-sudoku/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = board.length;
    const cols = board[0].length;
    // check each 3*3 boxes
    for(var i = 0; i < Math.floor(rows/3); i++){
        for(var j = 0; j < Math.floor(cols/3); j++){
            // iterate through each cell of box;
            var cStart = i * 3;
            var cEnd =  j * 3;
            var map = {};
            for(var l = cStart; l < cStart + 3; l++){
                for(var m = cEnd; m < cEnd + 3; m++){
                    if(map[board[l][m]] !== undefined && board[l][m] != "."){
                        return false;
                    } else {
                        map[board[l][m]] = 1;
                    }
                }
            }
        }
    }
    // check each rows;
    for(var i = 0; i < rows; i++){
        var map = {};
        for(var j=0; j < cols; j++){
            if(board[i][j] != "." && map[board[i][j]] !== undefined){
                return false;
            } else {
                map[board[i][j]] = 1;
            }
        }
    }
    //  & cols
    for(var j = 0; j < cols; j++){
        var map = {};
        for(var i = 0; i < rows; i++) {
            if(board[i][j] != "." && map[board[i][j]] !== undefined){
                return false;
            } else {
                map[board[i][j]] = 1;
            }
        }
    }
    return true;
};

```