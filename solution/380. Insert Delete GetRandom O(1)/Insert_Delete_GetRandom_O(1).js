// OJ: https://leetcode.com/problems/insert-delete-getrandom-o1/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
var RandomizedSet = function () {
    this.set = {};
};
RandomizedSet.prototype.insert = function (val) {
    if (this.set[val] == undefined) {
        this.set[val] = 1;
        return true;
    }
    return false;
};
RandomizedSet.prototype.remove = function (val) {
    if (this.set[val] != undefined) {
        delete this.set[val];
        return true;
    }
    return false;
};
RandomizedSet.prototype.getRandom = function () {
    var size = Object.keys(this.set).length;
    if (size >= 1) {
        var index = Math.floor(Math.random() * size + 1);
        return Object.keys(this.set)[index - 1];
    }
};