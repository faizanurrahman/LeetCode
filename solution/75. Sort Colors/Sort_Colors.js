/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var swap = function (a, b) {
 a = a ^ b;
 b = a ^ b;
 a = a ^ b;
}
var sortColors = function (nums) {

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

 while (index <= right) {
  if (nums[index] == 0) {
   if (left == index) {
    index++;
    continue;
   }
   nums[index] = nums[left];
   nums[left] = 0;
   left++;

  }

  else if (nums[index] == 1) {
   index++;
  }

  else if (nums[index] == 2) {
   nums[index] = nums[right];
   nums[right] = 2;
   right--;
  }
 }

};