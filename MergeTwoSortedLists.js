/*User outside of leetcode: */
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode(-Infinity); //set to -∞
    let prev = dummy;

    while (list1 && list2) { //list1 AND list2 not null
        if (list1.val <= list2.val) {
            prev.next = list1; //insert into dummy
            prev = list1; //set prev to the value of last compared element in list1
            list1 = list1.next; //move pointer to next val in list1 
        } else {
            prev.next = list2;
            prev = list2;
            list2 = list2.next;
        }
    }

    if (!list1) { prev.next = list2 };
    if (!list2) { prev.next = list1 };

    return dummy.next;
};

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];
console.log(mergeTwoLists(list1, list2));