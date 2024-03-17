/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeKLists = function (lists) {
    let res = null

    for (let list of lists) {
        res = merge(res, list)
    }

    return res

};

var merge = function (list1, list2) {

    if (!list1) return list2
    if (!list2) return list1

    if (list1.val < list2.val) {
        list1.next = merge(list1.next, list2)
        return list1
    } else {
        list2.next = merge(list2.next, list1)
        return list2
    }
};

const lists = [[1, 4, 5], [1, 3, 4], [2, 6]]
console.log(mergeKLists(lists))