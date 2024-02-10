# JS-StructuresAndAlgorithms
This Collection contains multiple JavaScript files.

### References:
https://leetcode.com/

### Mapping:
| Leetcode Name | Filename      |
| ------------- | ------------- |
| 1. TwoSum  | TwoSum.js  |
| 9. Palindrome Number  | Palindrom.js  |
| 14. Longest Common Prefix  | LongestCommonPrefix.js |
| 20. Valid Parentheses  | ValidParentheses.js  |
| 21. Merge Two Sorted Lists  | MergeTwoSortedLists.js |
| 26. Remove Duplicates from Sorted Array  | RemoveDuplicatesFromSortedArray.js  |
| 27. Remove Element  | RemoveElement.js  |
| 28. Find the Index of the First Occurrence in a String  | FirstOccurrenceInAString.js  |
| 35. Search Insert Position  | SearchInsertPosition.js  |
| 58. Length of Last Word  | LengthOfLastWord.js  |
| 66. Plus One  | PlusOne.js  |
| 67. Plus One  | AddBinary.js  |
| 67. Sqit(x) (square root)  | Sqrt.js  |
| 70. Climbin Stairs  | ClimbinStaris.js  |
| 83. Remove Duplicates From Sorted List  | RemoveDuplicatesFromSortedList.js  |
| 88. Merge A Sorted Array  | MergeSortedArray.js  |



---
# Binary Tree`s (How To):
<img width="779" alt="Screenshot 2024-02-07 at 21 49 07" src="https://github.com/weristdominik/JS-StructuresAndAlgorithms/assets/47948163/8193d9ec-8bf9-444c-a493-df25fbdd4e9e">



### Code of ALL Traversel(s) of Binary Tree above:
```
class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

 

// Root of Binary Tree
var root = null;

function printInorder(node) {

    if (node == null) {
        return;
    }

    printInorder(node.left);
    console.log(node.key + " ");
    printInorder(node.right);

}

 

function printPreorder(node) {
    if(node == null) {
        return;
    }

    console.log(node.key + " ");
    printPreorder(node.left);
    printPreorder(node.right);
}

 

function printPostorder(node) {

    if(node == null) {
        return;
    }

    printPostorder(node.left);
    printPostorder(node.right);
    console.log(node.key + " ");
}

 

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

 

console.log("Inorder traversal of binary tree is ");
console.log(printInorder(root)); //Printing Inorder Traversal
console.log("------------------------------------");
console.log(printPreorder(root)); //Printing PreOrder Traversal
console.log("------------------------------------");
console.log(printPostorder(root)); //Printing PostOrder Traversal

```


### Invert A Binary Tree:
```
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
```

## ./BinaryTree
| Leetcode Name | Filename      |
| ------------- | ------------- |
| 94. Binary Tree Inorder Traversal  | BinaryTreeInorderTraversal.js  |
| 100. Same Tree  | SameTree.js  |
| 101. Symmetric Tree  | SymmetricTree.js  |
| 104. Maximum Depth of Binary Tree  | MaxDepthOfBinaryTree.js  |
| 108. Convert Sorted Array to Binary Search Tree  | ConvertSortedArrayToBinarySearchTree.js  |
| 110. Balanced Binary Tree | BalancedBinaryTree.js |
| 110. BMinimum Depth of Binary Tree | MinimumDepthOfBinaryTree.js |
| 112. Path Sum | PathSum.js |
| 144. Binary Tree Preorder Traversal | BinaryTreePreorderTraversal.js |
| 145. Binary Tree Postorder Traversal | BinaryTreePostorderTraversal.js |
| 222. Count Complete Tree Nodes | CountcompleteNodes.js |
| 226. Invert Binary Tree | InvertBinaryTree.js |
| 257. Binary Tree Paths | BinaryTreePaths.js |
| 404. Sum of Left Leaves | SumOfLeftLeaves.js |


## BinaryTree wording:
**diameter** of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the _root_. 

=> Diameter = Left subtree height + Right subtree height + 1