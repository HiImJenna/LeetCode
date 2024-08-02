/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var joinDigits = digits.join("");
    var bigIntDigits = BigInt(joinDigits) + 1n;
    var resultDigits = bigIntDigits.toString().split("").map(Number);

    return resultDigits;
};

console.log(plusOne([9, 1])); //[9, 2]