/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let majority = Math.floor(nums.length / 2);

    let hashMap = {};
    for (i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]]) {
            hashMap[nums[i]] = hashMap[nums[i]] + 1;
        } else {
            hashMap[nums[i]] = 1;
        }
    }

    /*HashMap: { '2': 1, '3': 2 } */

    for (const key in hashMap) {
        if (hashMap[key] > majority) return key;
    }


};

const biggestKey = (nums) => {

    let hashMap = {}; //create new hashMap

    //Loop through Array
    for (i = 0; i < nums.length; i++) {
        //Count each nums[i] if duplicate IF NOT then just add to hashMap with initial 1
        if (hashMap[nums[i]]) { //if nums[i] value is found in hashMap
            hashMap[nums[i]] = hashMap[nums[i]] + 1; //count hashMap[key] + 1;
        } else {
            hashMap[nums[i]] = 1; //Add inital with 1
        }
    }

    console.log(hashMap);

    //Additional find in hashMap biggest KeyValue Pair:
    for (const key in hashMap) {
        if (hashMap[key] > 2) { //KeyValue bigger than 2
            console.log("Key: " + key);
            console.log("KeyValue: " + hashMap[key]);
            console.log("-------------");
        }
    }
};

const nums = [2, 2, 1, 1, 1, 2, 2, 5, 5, 6, 7, 8, 8, 8];
console.log(biggestKey(nums));