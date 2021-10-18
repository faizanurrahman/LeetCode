# [1. Two Sum (Easy)](https://leetcode.com/problems/two-sum/)

<p>Given an array of integers <code>nums</code>&nbsp;<bvtag class="memorize_new_word bv_leetcode_com bv_browserName_google_chrome  burning_vocabulary  _id_1625809030584">and</bvtag> an integer <code>target</code>, return <em>indices of the two <bvtag class="memorize_new_word bv_leetcode_com bv_browserName_google_chrome  burning_vocabulary  _id_1623334801427">numbers</bvtag> such that they add up to <code>target</code></em>.</p>

<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, <bvtag class="memorize_new_word bv_leetcode_com bv_browserName_google_chrome  burning_vocabulary  _id_1625809030584">and</bvtag> you may not use the <em>same</em> element twice.</p>

<p>You can return the answer in any order.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Output:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [3,2,4], target = 6
<strong>Output:</strong> [1,2]
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> nums = [3,3], target = 6
<strong>Output:</strong> [0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[<bvtag class="memorize_new_word bv_leetcode_com bv_browserName_google_chrome  burning_vocabulary  _id_1627987474591">i</bvtag>] &lt;= 10<sup>9</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
	<li><strong>Only one valid answer exists.</strong></li>
</ul>

<p>&nbsp;</p>
<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than&nbsp;<code>O(n<sup>2</sup>)&nbsp;</code>time complexity?

**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Hash Table](https://leetcode.com/tag/hash-table/)

**Similar Questions**:
* [3Sum (Medium)](https://leetcode.com/problems/3sum/)
* [4Sum (Medium)](https://leetcode.com/problems/4sum/)
* [Two Sum II - Input array is sorted (Easy)](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
* [Two Sum III - Data structure design (Easy)](https://leetcode.com/problems/two-sum-iii-data-structure-design/)
* [Subarray Sum Equals K (Medium)](https://leetcode.com/problems/subarray-sum-equals-k/)
* [Two Sum IV - Input is a BST (Easy)](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)
* [Two Sum Less Than K (Easy)](https://leetcode.com/problems/two-sum-less-than-k/)
* [Max Number of K-Sum Pairs (Medium)](https://leetcode.com/problems/max-number-of-k-sum-pairs/)
* [Count Good Meals (Medium)](https://leetcode.com/problems/count-good-meals/)
* [Count Number of Pairs With Absolute Difference K (Easy)](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/)
* [Number of Pairs of Strings With Concatenation Equal to Target (Medium)](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/)

## Solution 1.

```js
// OJ: https://leetcode.com/problems/two-sum/
// Author: www.github.com/faizanurrahman
// Time: O(n)
// Space: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for(var i = 0; i < nums.length; i++){
        if(map[target - nums[i]] == undefined){
            map[nums[i]] = i;
        } else {
            var out = [];
            out.push(map[target-nums[i]]);
            out.push(i);
            return out;
        }
    }
};

```