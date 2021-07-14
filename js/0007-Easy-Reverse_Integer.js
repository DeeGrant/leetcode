// https://leetcode.com/problems/reverse-integer/

// const reverse = function(x) {
//     const revString = x.toString().split('').reverse().join('')
//     if (revString.length > 11) {
//         console.log('break 64 ', 0)
//         return 0
//     }
//
//     let ret = parseInt(revString, 10)
//     ret = x < 0 ? -ret : ret
//
//     const maxInt = Math.pow(2, 31)
//     if (-maxInt > ret || ret > maxInt - 1) {
//         console.log('break 32 ', 0)
//         return 0
//     }
//
//     console.log('returned ', ret)
//     return ret
// };

// Cleaned up
const reverse = function(x) {
    const revString = x.toString().split('').reverse().join('')
    if (revString.length > 11) return 0

    let ret = parseInt(revString, 10)
    ret = x < 0 ? -ret : ret

    const maxInt = Math.pow(2, 31)
    if (-maxInt > ret || ret > maxInt - 1) return 0

    return ret
};


// with fewer native methods
// const reverse = function(x) {
//     if (x.toString().length > 19) {
//         console.log('64 bit limit ', 0)
//         return 0
//     }
//
//     let isNegative = false
//     if (x < 0) {
//         isNegative = true
//         x = -x
//     }
//
//     let reverse = 0
//     while (x > 0) {
//         reverse = reverse * 10 + x % 10
//         x = Math.floor(x / 10)
//         console.log('x is ', x)
//     }
//
//     reverse = isNegative ? -reverse : reverse
//
//     const maxInt = Math.pow(2, 31)
//     if (-maxInt > reverse || reverse > maxInt - 1) {
//         console.log('max 32 ', 0)
//         return 0
//     }
//     console.log('returned ', reverse)
//     return reverse
// };

reverse(1534236469)
reverse(7463847412)
reverse(8463847412)
reverse(-8463847412)
reverse(-9463847412)

reverse(123)
reverse(-123)
reverse(120)
reverse(0)
