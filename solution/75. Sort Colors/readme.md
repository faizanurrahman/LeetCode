# [75. Sort Colors (Medium)](https://leetcode.com/problems/sort-colors/)

<p>Given an array <code>nums</code> with <code>n</code> objects colored red, white, or blue, sort them <strong><a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a> </strong>so that objects of the same color are adjacent, with the colors in the order red, white, and blue.</p>

<p>We will use the integers <code>0</code>, <code>1</code>, and <code>2</code> to represent the color red, white, and blue, respectively.</p>

<p>You must solve this problem without using the library's sort function.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [2,0,2,1,1,0]
<strong>Output:</strong> [0,0,1,1,2,2]
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [2,0,1]
<strong>Output:</strong> [0,1,2]
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [0]
<strong>Output:</strong> [0]
</pre><p><strong>Example 4:</strong></p>
<pre><strong>Input:</strong> nums = [1]
<strong>Output:</strong> [1]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= n &lt;= 300</code></li>
	<li><code>nums[i]</code> is <code>0</code>, <code>1</code>, or <code>2</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong>&nbsp;Could you come up with a one-pass algorithm using only&nbsp;constant extra space?</p>


**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Two Pointers](https://leetcode.com/tag/two-pointers/), [Sorting](https://leetcode.com/tag/sorting/)

**Similar Questions**:
* [Sort List (Medium)](https://leetcode.com/problems/sort-list/)
* [Wiggle Sort (Medium)](https://leetcode.com/problems/wiggle-sort/)
* [Wiggle Sort II (Medium)](https://leetcode.com/problems/wiggle-sort-ii/)

## Solution 1.

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var swap = function(a, b){
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
}
var sortColors = function(nums) {
  
    let n = nums.length;
//     let zeroCount = 0;
//     let oneCount = 0;
//     let twoCount = 0;
    
//     for(var i = 0; i < n; i++){
//         if(nums[i] == 0) zeroCount++;
//         else if (nums[i] == 1) oneCount++;
//         else twoCount++;
//     }

//     for(var i = 0; i < n; i++){
//         if(zeroCount){
//             nums[i] = 0;
//             zeroCount--;
//         } else if (oneCount){
//             nums[i] = 1;
//             oneCount--;
//         } else if (twoCount){
//             nums[i] = 2;
//             twoCount--;
//         }
//     }

    let left = 0; 
    let right = n - 1;
    let index = 0;
    
    while(index <= right){
        if(nums[index] == 0){
            if(left == index){
                index++;
                continue;
            }
            nums[index] = nums[left];
            nums[left] = 0;
            left++;
            
        }
        
        else if(nums[index] == 1){
            index++;
        }
        
        else if(nums[index] == 2) {
            nums[index] = nums[right];
            nums[right] = 2;
            right--;
        }
    }

};

```