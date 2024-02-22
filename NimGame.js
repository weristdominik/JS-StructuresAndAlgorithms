/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
    if (n % 4 == 0) return false

    return true
};

/*
1 2 3 4 5 6 7 8
T T T F T T T F
 */