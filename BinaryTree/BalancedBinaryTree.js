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
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isBalanced = function(root) {
    if (!root) return 1;
    let left = isBalanced(root.left);
    let right = isBalanced(root.right);
    if(!left || !right) return false;
    if(Math.abs(left - right) > 1 || Math.abs(left - right) < -1) return false; //Math.abs to calc most ouder Tree`s
    return Math.max(left, right) + 1;
};


let root = null; 
root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(isBalanced(root));