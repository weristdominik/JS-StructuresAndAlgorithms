/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    let calc = Math.sqrt(area);

    //Square Root is INT Value
    if (Number.isInteger(calc)) return [calc, calc]

    //Square Root is Float Value not valid!
    let len = Math.floor(calc)
    for (let i = len; i >= 0; i--) {
        if (Number.isInteger(area / i)) return [(area / i), i]
    }
};

const area = 122122
console.log(constructRectangle(area))