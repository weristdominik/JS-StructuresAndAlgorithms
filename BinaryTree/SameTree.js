/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
};


var isSameTree = function (p, q) {
    if (q == null && p == null) {
        return true;
    } else if (q == null && p != null) {
        return false;
    } else if (q != null && p == null) {
        return false;
    } else if (q.val != p.val) {
        return false;
    } else {
        if (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
            return true;
        } else {
            return false;
        }
    }
};

const p = new TreeNode(1, 2);
const q = new TreeNode(1, 2);
console.log(isSameTree(p, q));