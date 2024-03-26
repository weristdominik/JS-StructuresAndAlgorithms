/*################################################
            1.    Recursion
################################################*/
var useRecursion = (text1, text2) => {
    let length1 = text1.length - 1 //-1 because starting from Index 0
    let length2 = text2.length - 1 //-1 because starting from Index 0

    var recursiveHelper = (i, j) => {
        //if one is length = 0 then return 0
        if (i < 0 || j < 0) return 0

        //Compare each Char
        if (text1[i] == text2[j]) {
            return 1 + recursiveHelper(i - 1, j - 1) //if text1 Char == text2 Char => Call again for next Char
        } else {
            return Math.max(recursiveHelper(i, j - 1), recursiveHelper(i - 1, j)) //return Back max => move i or j faster than other!
        }
    }

    return recursiveHelper(length1, length2)

}
const rtext1 = "abcde", rtext2 = "ace"
console.log("use Recursion: ")
console.log(useRecursion(rtext1, rtext2))
console.log("-----------------------------------")



/*################################################
           2.    Dynamic Programming
################################################*/
var useDynamicProgramming = (text1, text2) => {
    let length1 = text1.length //no need of -1 because whe need additional 0
    let length2 = text2.length //no need of -1 because whe need additional 0

    //Create text1.length x text2.length Array filled with 0`s
    //+1 beacuso we need additional 0 at beginning of array
    const dp = new Array(length1 + 1).fill(0).map(() => new Array(length2 + 1).fill(0));

    //Yes we are starting with 1!
    for (let i = 1; i <= text1.length; i++) { //row
        for (let j = 1; j <= text2.length; j++) { //column
            //if Char(s) Match:
            if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
                //Take value from dp[i-1][j-1] + 1
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else { //If Char(s) don`t Match:
                //get Max Value from Left to dp[i][j] OR from Above dp[i][j]
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[length1][length2]

}
const dtext1 = "abcde", dtext2 = "ace"
console.log("use Dynamic Programming:")
console.log(useDynamicProgramming(dtext2, dtext1))


/*################################################
           3. Recursion with Memoization
################################################*/
var useRecursionWithMemoization = (text1, text2) => {
    let length1 = text1.length - 1; // -1 because starting from Index 0
    let length2 = text2.length - 1; // -1 because starting from Index 0
    let hashMap = {} //Memoization "Cache" Storage

    var recursiveHelper = (i, j) => {
        //check if this case is already in Hashmap
        if (hashMap[i + ',' + j] !== undefined) {
            return hashMap[i + ',' + j]
        }

        //if ether i or j .length < 0 => return 0!
        if (i < 0 || j < 0) return 0

        //compare each Char
        if (text1[i] == text2[j]) {
            // If characters match, include them in the subsequence
            hashMap[i + ',' + j] = 1 + recursiveHelper(i - 1, j - 1)
        } else {
            // If characters don't match, explore two possibilities
            hashMap[i + ',' + j] = Math.max(recursiveHelper(i - 1, j), recursiveHelper(i, j - 1))
        }

        // Store the result in memoization storage
        return hashMap[i + "," + j];
    }

    console.log(recursiveHelper(length1, length2))
}

const r1text1 = "abcde", r1text2 = "ace"
console.log("use Recursion with Memoization:")
console.log(useRecursionWithMemoization(r1text2, r1text1))