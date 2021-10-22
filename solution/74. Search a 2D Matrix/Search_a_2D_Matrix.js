// OJ: https://leetcode.com/problems/search-a-2d-matrix/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length;
    let left = 0;
    let right = row * col - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        // convert linear to 2d array index
        var j = mid % col;
        var i = Math.floor(mid / col);
        if (matrix[i][j] == target) {
            return true;
        } else if (matrix[i][j] > target) {
            right = col * i + j - 1;
        } else {
            left = col * i + j + 1;
        }
    }
    return false;
};