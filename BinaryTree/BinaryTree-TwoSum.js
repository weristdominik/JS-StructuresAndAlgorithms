/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var findTarget = function (root, k) {

    //build Array
    let map = new Map()
    let res = false

    var inorderTraversal = (node) => {
        if (!node) return
        inorderTraversal(node.left)
        if (map.has(k - node.val)) res = true
        map.set(node.val, node.val)
        inorderTraversal(node.right)

    }

    inorderTraversal(root)
    return res
};

let root = null
root = new TreeNode(5)
root.left = new TreeNode(3)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.right = new TreeNode(6)
root.right.right = new TreeNode(7)

const k = 9

console.log(findTarget(root, k))