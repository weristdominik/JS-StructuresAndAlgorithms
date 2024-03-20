/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
    let obj = {}
    let res = []

    for (let path of edges) obj[path[1]] = true;
    for (let i = 0; i < n; i++) if (!(i in obj)) res.push(i)
    return res
};

const n = 6, edges = [[0, 1], [0, 2], [2, 5], [3, 4], [4, 2]]
console.log(findSmallestSetOfVertices(n, edges))