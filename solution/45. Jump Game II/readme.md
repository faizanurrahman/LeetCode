# [45. Jump Game II (Medium)](https://leetcode.com/problems/jump-game-ii/)

<p>Given an array of non-negative integers <code>nums</code>, you are initially positioned at the first index of the array.</p>

<p>Each element in the array represents your maximum jump length at that position.</p>

<p>Your goal is to reach the last index in the minimum number of jumps.</p>

<p>You can assume that you can always reach the last index.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [2,3,1,1,4]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [2,3,0,1,4]
<strong>Output:</strong> 2
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 1000</code></li>
</ul>


**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/), [Greedy](https://leetcode.com/tag/greedy/)

**Similar Questions**:
* [Jump Game (Medium)](https://leetcode.com/problems/jump-game/)
* [Jump Game III (Medium)](https://leetcode.com/problems/jump-game-iii/)
* [Jump Game VII (Medium)](https://leetcode.com/problems/jump-game-vii/)

## Solution 1.

```js
// OJ: https://leetcode.com/problems/jump-game-ii/
// Author: www.github.com/faizanurrahman
// Time: O()
// Space: O()
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // edge case
    if(nums.length == 2){
        return 1;
    }
    if(nums.length == 1){
        return 0;
    }
    var index = nums[0];
    var max = nums[0];
    var count = 1;
    for(var i = 0; i < nums.length-1; i++){
        var limit = i + nums[i];
        if(limit >= nums.length - 1){
            return count;
        }
        var index = 0;
        for(var j = i; j <= limit; j++){
            if(max < nums[j] + j){
                max = nums[j] + j;
                index = j;
            }
        }
        count++;
        i = index -1;
    }
    return count;
};
```