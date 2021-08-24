// https://leetcode.com/problems/contains-duplicate/

// fast and decently small
function hasDuplicate(nums) {
    let set = new Set(nums)
    return set.size !== nums.length;
}

hasDuplicate([1,2,3,4])
hasDuplicate([1,2,3,1])
hasDuplicate([1,1,1,3,3,4,3,2,4,2])

// a lot slower and more memory
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = {}
    for (let i = 0; i < nums.length; i++) {
        if (set[nums[i]]) {
            return true
        }
        set[nums[i]] = 1
    }
    return false
};

containsDuplicate([1,2,3,4])
containsDuplicate([1,2,3,1])
containsDuplicate([1,1,1,3,3,4,3,2,4,2])