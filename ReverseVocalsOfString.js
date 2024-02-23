/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vow = s.match(/[aeiou]/gi);

    //1. Variante
    return s.replace(/[aeiou]/gi, el => vow.pop());


    //2. Variante


    s = s.split('')
    for (let i = 0; i < s.length; i++) {
        if (/[aeiou]/gi.test(s[i])) {
            s[i] = vow.pop();
        }
    }

    return s.join('');
};

const s = "Aa";
console.log(reverseVowels(s));