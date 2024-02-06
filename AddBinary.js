/**
 * 
 * 0 + 0 = 0
 * 1 + 0 = 1
 * 0 + 1 = 1
 * 1 + 1 = 0 (1 => carrier)
 * 1 + 1 + 1 = 1 (1 => carrier)
 * 
 * 
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const nums1 = a.split('');
    const nums2 = b.split('');
    const result = [];

    let carry = 0;

    //PROBLEM: Reverse Iterate through both Arrays at the same time!

    //Get length of both Arrays:
    let i = nums1.length - 1;
    let j = nums2.length - 1;

    while (i >= 0 || j >= 0) {
        let number = (i >= 0 ? parseInt(nums1[i]) : 0) + (j >= 0 ? parseInt(nums2[j]) : 0) + carry;

        //Proove Number:
        if (number === 0) { //0+0 OR 0+1
            result.push(0);
            carry = 0;
        } else if (number === 1) { //0+1 OR 1+0
            result.push(1);
            carry = 0;
        } else if (number === 2) {//1+1
            result.push(0);
            carry = 1;
        } else if (number === 3) {//1+1+1
            result.push(1);
            carry = 1;
        }

        i--;
        j--;
    }

    //This IF is needed - if we have positive carry left over after both arrays are finished iterating
    if (carry > 0) {
        result.push(carry);
    }

    return result.reverse().join('');
}
const a = "11";
const b = "1";
console.log(addBinary(a, b));




/*
Slower Solution:
 let nums1 = a.split('');
    nums1 = nums1.reverse();
    let nums2 = b.split('');
    nums2 = nums2.reverse();
    const result = [];
    let carry = 0;
 
    let i = 0;
    let j = 0;
 
    while (i < nums1.length || j < nums2.length) {
        let number = (i < nums1.length ? parseInt(nums1[i]) : 0) + (j < nums2.length ? parseInt(nums2[j]) : 0) + carry;
 
        console.log(number);
 
        //Proove Number:
        if(number === 0) { //0+0 OR 0+1
            result.push(0);
            carry = 0;
        } else if (number === 1) { //0+1 OR 1+0
            result.push(1);
            carry = 0;
        } else if (number === 2) {//1+1
            result.push(0);
            carry = 1;
        } else if (number === 3) {//1+1+1
            result.push(1);
            carry = 1;
        }
 
        i++;
        j++;
    }
 
    if(carry > 0) {
        result.push(carry);
    }
 
    return result.reverse().join('');
*/