/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let length = 0;

    for (i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            if (s[i - 1] == ' ') {
                length = 1;
            } else {
                length++;
            }
        }
    }

    return length;
};

const s = "luffy is still joyboy   ";
console.log(lengthOfLastWord(s));



/*
Slow but simple soution:

const strs = s.split('');
    const countArr = [];
    var count = 0;

    for (i = 0; i < strs.length; i++) {
        if (i === strs.length -1) {

            if (strs[i] != ' ') {count++;}

            if (count > 0) {
                countArr.push(count);
            }
        } else if (strs[i] != ' ') {
            count++;
        } else {
            if (count > 0) {
                countArr.push(count);
            }
            count = 0;
        }
    }

    return countArr[countArr.length -1].toString();
*/