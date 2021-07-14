// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
    const end = nums.length
    for (let i = 0; i < end; i++) {
        for (let j = i + 1; j < end; j++) {
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
};
