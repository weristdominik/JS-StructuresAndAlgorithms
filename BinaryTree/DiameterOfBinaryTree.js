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
 * @return {number}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var diameterOfBinaryTree = function (root) {
    if (!root.left && !root.right) return 0;

    return getRightTree(root);

    function getLeftTree(node) {
        if (!node) return 0;
        const left = getLeftTree(node.left);
        return left;
    }

    function getRightTree(node) {
        if (!node) return 0;
        const right = getRightTree(node.right);
        return right;
    }
};

let root = null;
root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);
console.log(diameterOfBinaryTree(root));