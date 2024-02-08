/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var sortedArrayToBST = function(nums) {

    if(nums.length === 0) {
        return null;
    }

    const center = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[center]);
    
    root.left = sortedArrayToBST(nums.slice(0, center));
    root.right = sortedArrayToBST(nums.slice(center + 1));

    return root;
    
};

const nums = [-10,-3,0,5,9];
console.log(sortedArrayToBST(nums));
