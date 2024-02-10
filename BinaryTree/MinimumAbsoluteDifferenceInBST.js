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

var getMinimumDifference = function (root) {
    let all = [];
    calc(root);

    function calc(root) {
        if (!root) return;
        all.push(root.val);
        calc(root.left);
        calc(root.right);
    }

    if (all.length < 2) {
        return all[0];
    } else {
        all = all.sort((a, b) => a - b);
        let sum = Infinity;
        let j = 1;
        for (i = 0; i < all.length; i++) {
            if ((all[j] - all[i]) < sum) {
                sum = (all[j] - all[i]);
            }
            j++;
        }

        return sum;
    }
};

let root = null;
root = new TreeNode(543);
root.left = new TreeNode(384);
root.right = new TreeNode(652);
root.left.right = new TreeNode(445);
root.right.right = new TreeNode(699);

console.log(getMinimumDifference(root));