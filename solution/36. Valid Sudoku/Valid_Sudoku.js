// OJ: https://leetcode.com/problems/valid-sudoku/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rows = board.length;
    const cols = board[0].length;
    // check each 3*3 boxes
    for (var i = 0; i < Math.floor(rows / 3); i++) {
        for (var j = 0; j < Math.floor(cols / 3); j++) {
            // iterate through each cell of box;
            var cStart = i * 3;
            var cEnd = j * 3;
            var map = {};
            for (var l = cStart; l < cStart + 3; l++) {
                for (var m = cEnd; m < cEnd + 3; m++) {
                    if (map[board[l][m]] !== undefined && board[l][m] != ".") {
                        return false;
                    } else {
                        map[board[l][m]] = 1;
                    }
                }
            }
        }
    }
    // check each rows;
    for (var i = 0; i < rows; i++) {
        var map = {};
        for (var j = 0; j < cols; j++) {
            if (board[i][j] != "." && map[board[i][j]] !== undefined) {
                return false;
            } else {
                map[board[i][j]] = 1;
            }
        }
    }
    //  & cols
    for (var j = 0; j < cols; j++) {
        var map = {};
        for (var i = 0; i < rows; i++) {
            if (board[i][j] != "." && map[board[i][j]] !== undefined) {
                return false;
            } else {
                map[board[i][j]] = 1;
            }
        }
    }
    return true;
};