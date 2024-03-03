/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    let newStr = s.replace(/-/g, '').toUpperCase()

    //s < k
    if (newStr.length < k) return newStr
    newStr = newStr.split('')
    for (let i = newStr.length - 1 - k; i >= 0; i -= k) { // Loop through array backwards and decrement by value of K
        newStr[i] = newStr[i] + '-';
    }
    return newStr.join('')
};

const s = "5F3Z-2e-9-", k = 4
console.log(licenseKeyFormatting(s, k))