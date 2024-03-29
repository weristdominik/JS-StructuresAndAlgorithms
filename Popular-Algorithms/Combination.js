
/*################################################
IMPORTANT: Combination IS NOT Permutation!
################################################*/

/*################################################
                   1. Recursion
################################################*/
function combinations(nums, k) {
    const result = [];

    function backtrack(start, current) {
        if (current.length === k) {
            result.push([...current]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }

    backtrack(0, []);
    return result;
}

const nums = [1, 2, 3, 4, 5];
const k = 3; // Desired combination size
console.log(combinations(nums, k));
