/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    let decode = '';
    let copyOfKey = key.split(' ').join('');

    let map = new Map();
    let count = 0;

    //Mapping Key Letter to alphabet
    for (let letter of copyOfKey) {
        if (!map.has(letter)) {
            map.set(letter, count);
            count++;
        };
    };

    //Iterate through message and find in map
    for (let i = 0; i < message.length; i++) {
        if (message[i] == ' ') decode += ' '

        //Get actual alphabet letter
        //ASCII 97 => a, 98 => b, 99 => c .....
        decode += String.fromCharCode(map.get(message[i]) + 97)

    }

    return decode
};

const key = "the quick brown fox jumps over the lazy dog",
    message = "vkbs bs t suepuv"
console.log(decodeMessage(key, message))