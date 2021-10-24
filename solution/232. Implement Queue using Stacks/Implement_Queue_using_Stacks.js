// OJ: https://leetcode.com/problems/implement-queue-using-stacks/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
if (this.front == this.back) return true;
var MyQueue = function () {
    this.stack = [];
    this.front = -1;
    this.back = 0;
};
/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    if (this.front == -1) {
        this.front = 0
    }
    this.stack.push(x);
    this.back++;
    return;
};
/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    return this.stack[this.front++];
};
/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.stack[this.front];
};
/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    if (this.front == -1) return true;
    if (this.front == this.back) return true;
    return false;
};
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */