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
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var invertTree = function(root) {
    if(!root) return root;

    let tmp = root.left;
    root.left = root.right;
    root.right = tmp

    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};

let root = null;
root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
console.log(invertTree(root));