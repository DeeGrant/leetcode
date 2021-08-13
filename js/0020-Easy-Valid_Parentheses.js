// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.match(/[^(){}\[\]]/)) {
        return false
    }

    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = []
    for (let parentheses of s) {
        if ('({['.includes(parentheses)) {
            stack.push(parentheses)
        } else {
            if (pairs[parentheses] !== stack.pop()) {
                return false
            }
        }
    }
    return stack.length === 0
};

console.log(isValid('what'))
console.log(isValid('(){}[]'))
console.log(isValid('what()'))
console.log(isValid(')('))
