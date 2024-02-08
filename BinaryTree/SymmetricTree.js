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

var isSymmetric = function(root) {
    // Special case...
    if (!root)
        return true;
    // Return the function recursively...
    return compare(root.left, root.right);
};
// A tree is called symmetric if the left subtree must be a mirror reflection of the right subtree...
var compare = function (left, right) {
    if((left == null && right != null) || (left != null && right == null) || (left && right && left.val !== right.val)) {
        return false;
    }
    if(left && right) {
        return compare(left.left, right.right) && compare(left.right, right.left);
    }

    //if IF Above is true then display:....
    return true;
        
    
        
};

var root = null;

root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(2);
root.right = new TreeNode(2);
root.right.left = new TreeNode(2);

/*
root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right = new TreeNode(2);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);
*/

/*
root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.right = new TreeNode(3);
root.right = new TreeNode(2);
root.right.right = new TreeNode(3);
*/

console.log(isSymmetric(root));