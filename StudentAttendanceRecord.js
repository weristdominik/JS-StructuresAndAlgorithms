/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let a = s.match(/[A]/g)

    //fewer than 2 days total
    if(a != null && a.length>=2) return false

    //for 3 or more consecutive days
    for(let i = 0; i < s.length; i++) {
        if(s[i] == 'L' && s[i+1] == 'L' && s[i+2] == 'L') {
            return false
        }
    }
    return true
};