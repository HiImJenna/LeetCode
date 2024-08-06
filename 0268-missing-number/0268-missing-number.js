/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b); //0, 1, 3
    let rs = "";

    if(nums.length === 1 && nums[0] === 0) {
        rs = 1;
    }

    for(let i = 0; i < nums.length-1; i++) {
        if(nums[i+1]-nums[i] !== 1) {
            rs = nums[i]+1;


        } else if(nums[nums.length-1] !== nums.length) {
            rs = nums.length;
        }
    }

    return rs;
};

console.log("result :: " + missingNumber([0]));