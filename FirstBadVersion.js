/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
isBadVersion = function (version) {
    if (version >= 4) return true;

    return false;
};

var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let start = 1;
        let end = n;

        while (start <= end) {
            //calc mid:
            let mid = Math.floor((start + end) / 2);

            if (isBadVersion(mid)) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return start;
    };
};


console.log(solution(isBadVersion)(5));