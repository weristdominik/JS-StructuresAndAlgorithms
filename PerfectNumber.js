/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let tmp =0;
    for(let i = 1; i <= num/2; i++) {
        if(num%i=== 0) {
            tmp +=i
        }
    }

    if(tmp === num && tmp!== 0) return true

    return false
};