/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}


var removeElements = function (head, val) {

    if (!head) {
        return head;
    }

    let list = head;

    while (list && list.next) {
        if (list.next.val == val) {
            list.next = list.next.next;
        } else {
            list = list.next;
        }
    }

    return head.val === val ? head.next : head;
};

const headA = new ListNode(6);
headA.next = new ListNode(2);
headA.next.next = new ListNode(6);
headA.next.next.next = new ListNode(3);
headA.next.next.next.next = new ListNode(4);
headA.next.next.next.next.next = new ListNode(5);
headA.next.next.next.next.next.next = new ListNode(6);
const val = 6;
console.log(removeElements(headA, val));
