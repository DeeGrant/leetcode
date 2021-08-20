// https://leetcode.com/problems/majority-element/

// fast, but high memory usage
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let half = nums.length / 2
    let set = Array.from(new Set(nums))

    for (let num of set) {
        let count = nums.filter(n => n === num).length
        if (count > half) {
            return num
        }
    }
};

// stand up answer
// slightly slower, slightly less memory usage
function majorityElementV2(nums) {
    const elem = {}
    let count = 0
    let ret = nums[0]

    // populate hash map
    let num
    for (let i = 0; i < nums.length; i++) {
        num = nums[i]
        if (!elem[num]) {
            elem[num] = 1
        } else {
            elem[num]++
        }
    }

    for (const prop in elem) {
        if (elem[prop] > count) {
            count = elem[prop]
            ret = prop
        }
    }

    return ret
}