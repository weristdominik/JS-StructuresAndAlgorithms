function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (list1, list2) {
    let L3 = new ListNode(null, null)
    let prev = L3

    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            prev.next = list1;
            prev = prev.next;
            list1 = list1.next;
        } else {
            prev.next = list2;
            prev = prev.next;
            list2 = list2.next;
        }
    }

    prev.next = (list1 !== null) ? list1 : list2;

    return L3.next
};

// create first linked list: 1 -> 2 -> 4
var n3 = new ListNode(3, null);
var n2 = new ListNode(2, n3);
var n1 = new ListNode(1, n2);
var L1 = n1;

// create second linked list: 1 -> 3 -> 4
var n6 = new ListNode(4, null);
var n5 = new ListNode(3, n6);
var n4 = new ListNode(1, n5);
var L2 = n4;

console.log(mergeTwoLists(L1, L2))