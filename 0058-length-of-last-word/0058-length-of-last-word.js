/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let hi = s.trim();
    let array = hi.split(" ");
    let i = array.length-1

    return array[i].length;
};

console.log(lengthOfLastWord("fly me to the moon   "));