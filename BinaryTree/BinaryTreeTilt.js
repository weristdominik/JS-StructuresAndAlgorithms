function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}



var findTilt = function (root) {
    let result = 0

    var tilt = function (root) {
        if (!root) return 0

        let left = tilt(root.left)
        let right = tilt(root.right)
        result += Math.abs(left - right)
        return left + right + root.val
    }

    tilt(root)
    return result
};





// Creating the tree: [1, 2, 3]
const rootNode = new TreeNode(1);
rootNode.left = new TreeNode(2);
rootNode.right = new TreeNode(3);

console.log(findTilt(rootNode))