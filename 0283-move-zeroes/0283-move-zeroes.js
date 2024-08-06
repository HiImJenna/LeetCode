/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zero = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            zero++;
        }
    }

    for(let j = 0; j < zero; j++) {
        nums.push(0);
    }

    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));