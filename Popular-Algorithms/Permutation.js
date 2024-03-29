/*################################################
IMPORTANT: Permutation IS NOT Combination!
################################################*/

/*################################################
                   1. Recursion
################################################*/
function permute(nums) {
    const result = [];

    function backtrack(current, remaining) {
        if (remaining.length === 0) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const next = remaining.slice(); // Make a copy of remaining
            const num = next.splice(i, 1)[0]; // Remove current element from remaining
            backtrack(current.concat(num), next); // Add current element to current and recurse
        }
    }

    backtrack([], nums);
    return result;
}

const nums = [1, 2, 3];
console.log(permute(nums));
