const twoPointers = (s, t) => {
    let i = 0, j = 0

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++
        }
        j++
    }
    return i === s.length
}

const s = "abc", t = "ahbgdc"
console.log(twoPointers(s, t))

/*
Initialize two pointers i and j to 0.
Use a while loop to iterate through both strings (s and t).
Inside the loop, compare the characters at the current positions s[i] and t[j].
If the characters are equal, increment the pointer i.
Always increment the pointer j.
Continue this process until either all characters in s are matched (i.e., i reaches the length of s) or the end of t is reached.
Check if i is equal to the length of s. If true, it means all characters of s were found in the same order in t, and the function returns true; otherwise, it returns false.
In your example, s = "abc" and t = "ahbgdc", and the output of isSubsequence(s, t) will be true, as "abc" is a subsequence of "ahbgdc".
*/