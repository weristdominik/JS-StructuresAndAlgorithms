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
 * @return {string[]}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var binaryTreePaths = function(root) {
    if(!root) return [];
    
    let out = [];
    
    function calc(node, currentPath) {
        currentPath += node.val; //+= Adds to String

        if(!node.left && !node.right) {
            out.push(currentPath);
        }
        if(node.left) {
            calc(node.left, currentPath + "->");
        }
        if(node.right) {
            calc(node.right, currentPath + "->");
        }
    }

    calc(root, "");
    return out;
};

let root = null;
root = new TreeNode(1);
root.right = new TreeNode(3);
root.left = new TreeNode(2);
root.left.right = new TreeNode(5);

console.log(binaryTreePaths(root));