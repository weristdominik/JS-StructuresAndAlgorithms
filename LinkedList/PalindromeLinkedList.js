/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var isPalindrome = function (head) {
    if (!head) return head;

    let a = [];

    while (head != null) {
        a.push(head.val);
        head = head.next;
    }

    return a.join('') == a.reverse().join('');
};

const headA = new ListNode(1);
headA.next = new ListNode(2);
headA.next.next = new ListNode(2);
headA.next.next.next = new ListNode(4);
console.log(isPalindrome(headA));