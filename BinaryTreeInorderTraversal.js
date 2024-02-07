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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let res = [];
    inorder(root);
    function inorder(root) {
        if (!root) {
            return null;
        }

        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }

    return res;
};

/*
This Method is using DFS (Depth First Search) which is the standard,
but has an efficiency of O(n).
Here is the example Video: https://www.youtube.com/watch?v=SjwK3CZPuqA

More Info on Binary Tree (inorder, preorder, postorder) Traversel:
https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/




*********
There is an slightly newer Method called: "Morris Traversal" but this is to new to be successful
********




*/