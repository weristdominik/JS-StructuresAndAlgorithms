/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/*#############################################################
This is a special Form of Permutation

Each candidates[i] can be used ONLY ONE Times!
 -> Sort candidate asc
 -> if(i > index && candidates[i] === candidates[i-1]) continue

#############################################################*/

var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b); // Sort the candidates array to handle duplicates
    let index = 0
    let result = []
    let tmp = []

    var backTracking = (index, target, tmp) => {
        if(target === 0) {
            result.push([...tmp])
            return
        }

        if(target < 0) return

        for(let i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] === candidates[i - 1]) continue; // Skip duplicates
            tmp.push(candidates[i])
            backTracking(i+1, target-candidates[i], tmp)
            tmp.pop()
        }
    }

    backTracking(index, target, tmp)
    return result
};

const candidates = [10,1,2,7,6,1,5], target = 8
console.log(combinationSum2(candidates, target))