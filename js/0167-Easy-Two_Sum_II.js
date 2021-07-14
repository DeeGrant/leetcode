// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(numbers, target) {
    const end = numbers.length
    for (let i = 0; i < end; i++) {
        for (let j = i + 1; j < end; j++) {
            if (numbers[i] + numbers[j] === target) return [i + 1, j + 1]
        }
    }
};