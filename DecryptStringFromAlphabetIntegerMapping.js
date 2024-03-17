/**
 * @param {string} s
 * @return {string}
 * 
 *  Characters ('a' to 'i') are represented by ('1' to '9') respectively.
 *  Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
 */
var freqAlphabets = function (s) {

    const alphabet = '0abcdefghijklmnopqrstuvwxyz';
    let res = []

    for (let i = 0; i < s.length; i++) {
        if (s[i + 2] === "#") { //if Two Digit Number
            res.push(alphabet[parseInt(s[i] + s[i + 1])]);
            i += 2; // Skip the next two characters.
        } else {
            res.push(alphabet[parseInt(s[i])]);
        }
    }

    return res.join('')

}
const s = "1326#"
console.log(freqAlphabets(s))
//output => "jkab"