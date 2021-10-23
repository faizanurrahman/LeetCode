var findMin = function (nums) {
    const size = nums.length;

    if (size == 1) {
        return nums[0];
    }

    if (size == 2) {
        return nums[0] > nums[1] ? nums[1] : nums[0];
    }

    let left = 1;
    let right = size - 2;

    let minimum = nums[0];
    while (left <= right) {

        // check around left
        if (!(nums[left - 1] < nums[left] && nums[left] < nums[left + 1])) {
            minimum = Math.min(minimum, nums[left - 1], nums[left], nums[left + 1]);
            break;
        }
        // check around right
        if (!(nums[right - 1] < nums[right] && nums[right] < nums[right + 1])) {
            minimum = Math.min(minimum, nums[right - 1], nums[right], nums[right + 1]);
            break;
        }
        left++;
        right--;
    }

    return minimum;
};