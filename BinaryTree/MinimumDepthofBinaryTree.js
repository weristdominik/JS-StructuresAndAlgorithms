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
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var minDepth = function(root) {
    if(!root) {
        return 0;
    }
    
    var left = minDepth(root.left);
    var right = minDepth(root.right);
    if(left == 0 || right == 0) {
        return Math.max(left,right) +1;
    } else {
        return Math.min(left, right) +1;
    }
    
};


let root = null;
root = new TreeNode(2);
root.right = new TreeNode(3);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(5);
root.right.right.left = new TreeNode(7);
root.right.right.left.right = new TreeNode(6);

console.log(minDepth(root));