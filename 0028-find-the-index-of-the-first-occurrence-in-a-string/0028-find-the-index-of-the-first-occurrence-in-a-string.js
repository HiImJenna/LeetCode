/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //if(!needle.length) return 0;
    if(!haystack.includes(needle)) return -1;
    console.log(haystack.split(`${needle}`)[0])
    return haystack.split(`${needle}`)[0].length;
};

console.log(strStr("hello", "el"))