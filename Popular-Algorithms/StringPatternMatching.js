/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s = s.split(' ');

    if(s.length != pattern.length) return false;
    if (new Set(pattern).size !== new Set(s).size) return false; //New Set creates Object without Duplicated values
    
    let map1 = new Map();

    for(i = 0; i < pattern.length; i++) {
      if(!map1.has(pattern[i])) {
        map1.set(pattern[i], s[i]);
      }
      if(s[i] !== map1.get(pattern[i])) return false;
    }
     
    return true
};

const pattern = "abba", s = "dog dog dog dog";
console.log(wordPattern(pattern, s));