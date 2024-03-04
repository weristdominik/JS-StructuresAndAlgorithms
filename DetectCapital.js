/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word.match(/[A-Z]/g) != null && word.length == word.match(/[A-Z]/g).length) return true //All Uppercase

    if(word.match(/[a-z]/g) != null && word.length == word.match(/[a-z]/g).length) return true //All Lowercase
    
    if(word.match(/[A-Z]/g)!= null && word[0] == word.match(/[A-Z]/g)) return true //Only First Letter is Uppercase

    return false
};