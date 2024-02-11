/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let strs = s.toLocaleLowerCase().split('');
    let res = [];

    for (i = strs.length; i >= 0; i--) {
        if(/^[a-z0-9]$/.test(strs[i])) {
            res.push(strs[i]);
        };
    }

    let j = res.length - 1;
    for (k = 0; k < res.length; k++) {
        if(res[k] != res[j]) {
            return false;
        }
        j--;
    }

    return true;
};

const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));