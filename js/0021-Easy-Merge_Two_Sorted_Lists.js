// https://leetcode.com/problems/merge-two-sorted-lists/


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
    let ret = new ListNode(0, null)
    let tail = ret

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1
            l1 = l1.next
        } else {
            tail.next = l2
            l2 = l2.next
        }
        tail = tail.next
    }
    tail.next = l1 || l2

    return ret.next
};


// --------Test Method--------

const generateLinkedList = function(arr) {
    let ret = new ListNode(0, null)
    let tail = ret
    while (arr.length) {
        tail.next = new ListNode(arr.shift(), null)
        tail = tail.next
    }
    return ret.next
}

const test = mergeTwoLists(generateLinkedList([1,2,4]), generateLinkedList([1,3,4]))
console.log(test)