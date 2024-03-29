/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/*#############################################################
This is a special Form of Permutation

Each candidates[i] can be used unlimited Times!

#############################################################*/

var combinationSum = function(candidates, target) {
    let index = 0
    let tmp = []
    let result = []

    const backtrack = (index, target, tmp) => {

        if(target === 0) {
            result.push([...tmp])
            return
        }
        
        if(target < 0) return;

        for(let i = index; i < candidates.length; i++) {
            tmp.push(candidates[i])
            backtrack(i, target-candidates[i], tmp)
            tmp.pop()
        }
    };

    backtrack(index, target, tmp)
    return result
};

const candidates = [2,3,6,7], target = 7
console.log(combinationSum(candidates, target))