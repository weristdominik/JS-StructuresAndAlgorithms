/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let map = {}
    let res = []

    for (let chr of "qwertyuiop") { map[chr] = 'first' };
    for (let chr of "asdfghjkl") { map[chr] = 'second' };
    for (let chr of "zxcvbnm") { map[chr] = 'third' };

    //For Each Word in words array:
    for (let word of words) {
        let tmp = null
        //For Each Char in word from words Array:
        for (let i = 0; i < word.length; i++) {
            let row = map[word[0].toLocaleLowerCase()]
            if (map[word[i].toLocaleLowerCase()] != row) tmp = false
        }

        if (tmp != false) res.push(word)
    }

    return res
};

const words = ["Hello", "Alaska", "Dad", "Peace"]
console.log(findWords(words))