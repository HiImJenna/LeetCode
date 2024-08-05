/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const resultMap = {};
    let result;

    for(let i = 0; i < nums.length; i++) {
        resultMap[nums[i]] = resultMap[nums[i]] + 1 || 1;

    }

    console.log(resultMap);

    for(let j = 0; j < nums.length; j++) {
        if(resultMap[nums[j]] > 1) {
            result = true;
            return result;

        } else {
            result = false;
        }
    }
    
    return result;
};

console.log("result :: " + containsDuplicate([0,4,5,0,3,6]));
