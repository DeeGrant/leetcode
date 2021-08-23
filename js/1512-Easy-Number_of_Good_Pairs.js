// https://leetcode.com/problems/number-of-good-pairs/


function plus(num) {
    if (num < 1) {
        return 0
    }
    return num + plus(num-1)
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let counts = {}
    let pairs = 0

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (!counts[num]) {
            counts[num] = 1
        } else {
            counts[num]++
        }
    }

    for (let count of Object.values(counts)) {
        pairs = pairs + plus(count-1)
    }

    return pairs
};

numIdenticalPairs([1,2,3,1,1,3])
numIdenticalPairs([1,1,1,1])
numIdenticalPairs([1,2,3])