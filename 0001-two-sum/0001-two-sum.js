/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    console.log(nums + ', ' + target);
    if(nums.length === 0 || target === undefined) {
        return 'wrong!';
    }

    let result = [];
    for(i = 0; i < nums.length; i++) {
        for(j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                result.push(i);
                result.push(j);
                return result;
            }
        }
    }
};

console.log('result : ' + twoSum([3, 0, 3], 6)); //[0, 2]
