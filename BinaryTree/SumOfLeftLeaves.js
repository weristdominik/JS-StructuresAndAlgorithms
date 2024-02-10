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
};

var sumOfLeftLeaves = function(root) {

    let sum = 0;
    calc(root);

    function calc (node) {
        if(!node) return;

        if(node.left !== null) {
            if(!node.left.left && !node.left.right) {
                sum += node.left.val;
            }
        }
        calc(node.left);
        calc(node.right);
    }

    return sum;

};

let root = null;
root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(sumOfLeftLeaves(root));