/**
 * 
 *
 * Simple Solution for Palindrom.js or Leedcode Palindrom Question
 * 
 * 
 * @param {List[]} list
 * @return {List[]}
 */
var reverseList = function() {

    const reverseList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reverseList.push(list[i]);
    }

    return reverseList;
}

const list = [1, 2, 3, 4, 5];
console.log(reverseList());

/*OR:
for (i = arr.length; i >= 0; i--) {}
*/