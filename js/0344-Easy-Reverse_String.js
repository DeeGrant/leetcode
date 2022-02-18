//https://leetcode.com/problems/reverse-string/

var reverseString = function(s) {
    const length = s.length - 1
    for (let i = 0; i < length/2; i++) {
        let temp = s[i]
        s[i] = s[length - i]
        s[length - i] = temp
    }
    return s
};

reverseString(['h','e','l','l','o'])
