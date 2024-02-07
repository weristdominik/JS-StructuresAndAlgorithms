/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    var tmp = head;

    while (tmp && tmp.next) {
        if (tmp.val == tmp.next.val) {
            tmp.next = tmp.next.next;
        } else {
            tmp = tmp.next;
        }
    }

    return head;
};

const head = [1, 1, 2];
console.log(deleteDuplicates(head));